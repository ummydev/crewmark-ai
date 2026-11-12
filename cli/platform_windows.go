//go:build windows

package main

import (
	"errors"
	"os"
)

func processAlive(pid int) bool {
	_, err := os.FindProcess(pid)
	return pid > 0 && err == nil
}

// postToInbox: Claude Code's inbox on Windows is a named pipe that wants an auth key first, which isn't done yet.
func postToInbox(socket, text string) error {
	return errors.New("delivering to Claude Code on Windows isn't supported yet")
}

// lockDaemon: the scheduled task (service.go) doesn't start a second copy while one runs.
func lockDaemon() (func(), error) {
	return func() {}, nil
}
