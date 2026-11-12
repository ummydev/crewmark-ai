package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

// Calls to the agent API, signed with the employee's API key.

// cliError is a problem to show the person as is, without a stack or prefix beyond "crewmark:".
type cliError struct{ message string }

func (e cliError) Error() string { return e.message }

func fail(format string, args ...any) error {
	return cliError{fmt.Sprintf(format, args...)}
}

var httpClient = &http.Client{Timeout: 30 * time.Second}

// request sends body (if any) as JSON to baseURL+path and decodes the JSON answer into out (if any).
func request(baseURL, path, apiKey, method string, body, out any) error {
	var payload io.Reader
	if body != nil {
		data, err := json.Marshal(body)
		if err != nil {
			return err
		}
		payload = bytes.NewReader(data)
	}
	req, err := http.NewRequest(method, baseURL+path, payload)
	if err != nil {
		return fail("Invalid Crewmark address %s: %v", baseURL, err)
	}
	req.Header.Set("User-Agent", "crewmark-cli/"+version)
	if apiKey != "" {
		req.Header.Set("Authorization", "Bearer "+apiKey)
	}
	if body != nil {
		req.Header.Set("Content-Type", "application/json")
	}

	resp, err := httpClient.Do(req)
	if err != nil {
		return fail("Couldn't reach Crewmark at %s: %v", baseURL, err)
	}
	defer resp.Body.Close()
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		return fail("Couldn't read Crewmark's answer: %v", err)
	}
	if resp.StatusCode < 200 || resp.StatusCode > 299 {
		var problem struct {
			Error string `json:"error"`
		}
		if json.Unmarshal(data, &problem) == nil && problem.Error != "" {
			return cliError{problem.Error}
		}
		return fail("Request failed with status %d", resp.StatusCode)
	}
	if out == nil {
		return nil
	}
	if err := json.Unmarshal(data, out); err != nil {
		return fail("Crewmark answered %d with something the CLI doesn't understand: %v", resp.StatusCode, err)
	}
	return nil
}
