package main

import (
	"runtime"
	"testing"
)

func TestLocalTimeZone(t *testing.T) {
	t.Setenv("TZ", "Asia/Tokyo")
	if got := localTimeZone(); got != "Asia/Tokyo" {
		t.Errorf("with TZ=Asia/Tokyo got %q", got)
	}
	t.Setenv("TZ", ":Europe/Paris")
	if got := localTimeZone(); got != "Europe/Paris" {
		t.Errorf("with TZ=:Europe/Paris got %q", got)
	}
	// Not a zone name: falls back to /etc/localtime, which is some zone or nothing, never the bad value.
	t.Setenv("TZ", "Mars/Olympus")
	if got := localTimeZone(); got == "Mars/Olympus" {
		t.Errorf("kept an unknown zone")
	}
	if runtime.GOOS == "windows" {
		return
	}
	t.Setenv("TZ", "")
	t.Logf("this computer's zone: %q", localTimeZone())
}

func TestRepeatLine(t *testing.T) {
	next := "2026-11-09T02:00:00.000Z"
	got := repeatLine(issueRepeat{Schedule: "every 2 days at 10:00", TimeZone: "Asia/Shanghai", Next: &next})
	if want := "every 2 days at 10:00 (Asia/Shanghai) · next Mon 2026-11-09 10:00"; got != want {
		t.Errorf("got %q, want %q", got, want)
	}
	if got := repeatLine(issueRepeat{Schedule: "every weekday at 09:00", TimeZone: "UTC"}); got != "every weekday at 09:00 (UTC)" {
		t.Errorf("without next: %q", got)
	}
}
