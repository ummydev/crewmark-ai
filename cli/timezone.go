package main

import (
	"os"
	"path/filepath"
	"strings"
	"time"
)

// localTimeZone is this computer's IANA time zone, e.g. "Asia/Shanghai", for schedules given as a time of day (crewmark
// issues create|update --repeat): from $TZ, else where /etc/localtime points on macOS and Linux. "" when it can't
// tell, e.g. on Windows; the server then uses the employee's heartbeat zone, or UTC.
func localTimeZone() string {
	valid := func(zone string) string {
		if zone == "" || zone == "Local" || !strings.Contains(zone, "/") {
			return ""
		}
		if _, err := time.LoadLocation(zone); err != nil {
			return ""
		}
		return zone
	}
	if zone := valid(strings.TrimPrefix(os.Getenv("TZ"), ":")); zone != "" {
		return zone
	}
	target, err := filepath.EvalSymlinks("/etc/localtime")
	if err != nil {
		return ""
	}
	if i := strings.Index(target, "zoneinfo/"); i >= 0 {
		return valid(target[i+len("zoneinfo/"):])
	}
	return ""
}
