package main

import (
	"encoding/json"
	"errors"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
)

// Everything the CLI keeps on this computer lives in ~/.crewmark (%USERPROFILE%\.crewmark on Windows):
//   bin/crewmark              the CLI itself, put there by install.sh / install.ps1
//   credentials.json          one API key per employee set up here, and the person's CLI key after
//                             `crewmark login` (readable by this user only)
//   login.json                a login waiting to be allowed, for `crewmark login --wait`
//   employees/<id>/           what the daemon keeps for each employee: daemon.json, claude.log
//   install-id                a random id the install scripts send with their anonymous install counts

var home = func() string {
	if dir := os.Getenv("CREWMARK_HOME"); dir != "" {
		return dir
	}
	userHome, err := os.UserHomeDir()
	if err != nil {
		return ".crewmark"
	}
	return filepath.Join(userHome, ".crewmark")
}()

type employeeProfile struct {
	Name         string       `json:"name"`
	Organization organization `json:"organization"`
	// The Crewmark server, e.g. https://crewmark.ai.
	URL    string `json:"url"`
	APIKey string `json:"apiKey"`
	// The agent conversation that is this employee.
	Runtime     *string `json:"runtime"`
	SessionID   *string `json:"sessionId"`
	Workdir     string  `json:"workdir"`
	ConnectedAt string  `json:"connectedAt"`
}

// accountProfile is the person the CLI acts for after `crewmark login`, in one organization: it can make and change
// projects and employees there, and connect conversations to employees.
type accountProfile struct {
	URL          string       `json:"url"`
	APIKey       string       `json:"apiKey"`
	User         person       `json:"user"`
	Organization organization `json:"organization"`
}

type person struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type credentials struct {
	Employees map[string]employeeProfile `json:"employees"`
	Account   *accountProfile            `json:"account,omitempty"`
}

func credentialsPath() string { return filepath.Join(home, "credentials.json") }

// shortPath is a path for messages, with the home directory shortened to ~.
func shortPath(path string) string {
	userHome, err := os.UserHomeDir()
	if err == nil && strings.HasPrefix(path, userHome) {
		return "~" + path[len(userHome):]
	}
	return path
}

func readJSON(path string, into any) error {
	data, err := os.ReadFile(path)
	if errors.Is(err, fs.ErrNotExist) {
		return nil
	}
	if err != nil {
		return err
	}
	return json.Unmarshal(data, into)
}

// writePrivate writes a file only this user can read: it may hold API keys.
func writePrivate(path string, data any) error {
	if err := os.MkdirAll(home, 0o700); err != nil {
		return err
	}
	encoded, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return err
	}
	if err := os.WriteFile(path, append(encoded, '\n'), 0o600); err != nil {
		return err
	}
	return os.Chmod(path, 0o600)
}

func readCredentials() (credentials, error) {
	var stored credentials
	if err := readJSON(credentialsPath(), &stored); err != nil {
		return stored, fail("Couldn't read %s: %v", shortPath(credentialsPath()), err)
	}
	if stored.Employees == nil {
		stored.Employees = map[string]employeeProfile{}
	}
	return stored, nil
}

func readProfiles() (map[string]employeeProfile, error) {
	stored, err := readCredentials()
	return stored.Employees, err
}

func saveProfile(employeeID string, profile employeeProfile) error {
	stored, err := readCredentials()
	if err != nil {
		return err
	}
	stored.Employees[employeeID] = profile
	return writePrivate(credentialsPath(), stored)
}

// saveAccount stores the person's login, or forgets it when account is nil.
func saveAccount(account *accountProfile) error {
	stored, err := readCredentials()
	if err != nil {
		return err
	}
	stored.Account = account
	return writePrivate(credentialsPath(), stored)
}
