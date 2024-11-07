package provider

import (
	"context"
	"github.com/1340691923/ElasticView/pkg/infrastructure/config"
	grpcplugin "github.com/1340691923/ElasticView/pkg/infrastructure/plugins/backendplugin/grpc_plugin"
	"github.com/1340691923/ElasticView/pkg/infrastructure/plugins/plugin"
	"github.com/hashicorp/go-hclog"
	"path"
)

type Config struct {
	SignKey        string
	ID             string
	PluginDir      string
	PluginFileName string
	ExecArgs       []string
	IsDebug        bool
	TestAddr       string
	TestPid        int
}

func (p *Config) ExecutablePath() string {
	return path.Join(p.PluginDir, p.PluginFileName)
}

func DefaultProvider(_ context.Context, log hclog.Logger, closeLogWriteCallback func() error, provideCfg *Config, cfg *config.Config) *plugin.Plugin {
	p := new(plugin.Plugin)
	p.PluginDir = provideCfg.PluginDir
	p.PluginFileName = provideCfg.PluginFileName
	p.ID = provideCfg.ID
	p.SignKey = provideCfg.SignKey
	p.Cfg = cfg
	p.RegisterClient(grpcplugin.NewBackendPlugin(
		log, closeLogWriteCallback, provideCfg.ID, provideCfg.ExecutablePath(), provideCfg.IsDebug,
		provideCfg.TestAddr, provideCfg.TestPid, provideCfg.ExecArgs))

	p.SetLogger(log)
	return p
}