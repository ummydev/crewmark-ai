package main

import "testing"

func TestPageSize(t *testing.T) {
	for asked, want := range map[int]int{0: worklogPage, -3: worklogPage, 1: 1, 25: 25, 50: 50, 500: worklogMaxPage} {
		if got := pageSize(asked); got != want {
			t.Errorf("pageSize(%d) = %d, want %d", asked, got, want)
		}
	}
}
