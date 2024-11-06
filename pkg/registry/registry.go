package registry

import (
	"context"
)

type BackgroundServiceRegistry interface {
	GetServices() []BackgroundService
}

type CanBeDisabled interface {
	// IsDisabled should return a bool saying if it can be started or not.
	IsDisabled() bool
}

type BackgroundService interface {
	Run(ctx context.Context) error
}

type UsageStatsProvidersRegistry interface {
	GetServices() []ProvidesUsageStats
}

type ProvidesUsageStats interface {
	GetUsageStats(ctx context.Context) map[string]interface{}
}

func IsDisabled(srv BackgroundService) bool {
	canBeDisabled, ok := srv.(CanBeDisabled)
	return ok && canBeDisabled.IsDisabled()
}
