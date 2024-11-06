package web_engine

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"path"
	"sync"
)

func init() {
	mockMap = NewMockMap()
}

var mockMap *MockMap //RouterConfig
var authenticationPaths []string

type RouterConfigGroup struct {
	GroupRemark   string         `json:"label"`
	RouterConfigs []RouterConfig `json:"options"`
}

type RouterConfig struct {
	Url      string `json:"value"`
	Remark   string `json:"label"`
	NeedAuth bool   `json:"needAuth"`
}

type WebEngine struct {
	g *gin.Engine
}

func NewWebEngine() *WebEngine {
	gin.SetMode(gin.ReleaseMode)
	return &WebEngine{g: gin.Default()}
}

func (this *WebEngine) GetGinEngine() *gin.Engine {
	return this.g
}

func (this *WebEngine) Run() {
	this.g.Run()
}

func (this *WebEngine) Group(remark string, relativePath string, handlers ...gin.HandlerFunc) *MyRouterGroup {
	rg := this.g.Group(relativePath, handlers...)
	return NewMyRouterGroup(rg, relativePath, remark)
}

func (this *WebEngine) GetAuthenticationPaths() []string {
	return authenticationPaths
}

func (this *WebEngine) GetRouterConfigGroups() []RouterConfigGroup {
	routerConfigGroups := []RouterConfigGroup{}

	mockMap.Range(func(key string, val []RouterConfig) {
		routerConfigGroups = append(routerConfigGroups, RouterConfigGroup{
			GroupRemark:   key,
			RouterConfigs: val,
		})
	})

	return routerConfigGroups
}

type MyRouterGroup struct {
	rg                *gin.RouterGroup
	groupRelativePath string
	groupTag          string
	routerConfigs     []RouterConfig
}

func NewMyRouterGroup(rg *gin.RouterGroup, relativePath, remark string) *MyRouterGroup {
	return &MyRouterGroup{
		rg:                rg,
		groupTag:          remark,
		groupRelativePath: relativePath,
	}
}

func (this *MyRouterGroup) Use(middleware ...gin.HandlerFunc) *MyRouterGroup {
	this.rg.Handlers = append(this.rg.Handlers, middleware...)
	return this
}

func (this *MyRouterGroup) Group(remark, relativePath string, handlers ...gin.HandlerFunc) *MyRouterGroup {
	rg := this.rg.Group(relativePath, handlers...)
	return NewMyRouterGroup(rg, relativePath, remark)
}

func (this *MyRouterGroup) BasePath() string {
	return this.rg.BasePath()
}

func (this *MyRouterGroup) Handle(needAuth bool, httpMethod, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.Handle(httpMethod, relativePath, handlers...)
}

func (this *MyRouterGroup) POST(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.POST(relativePath, handlers...)
}

func (this *MyRouterGroup) GET(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.GET(relativePath, handlers...)
}

func (this *MyRouterGroup) DELETE(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.DELETE(relativePath, handlers...)
}

func (this *MyRouterGroup) PATCH(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.PATCH(relativePath, handlers...)
}

func (this *MyRouterGroup) PUT(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.PUT(relativePath, handlers...)
}

func (this *MyRouterGroup) OPTIONS(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.OPTIONS(relativePath, handlers...)
}

func (this *MyRouterGroup) HEAD(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.HEAD(relativePath, handlers...)
}

func (this *MyRouterGroup) Any(needAuth bool, remark, relativePath string, handlers ...gin.HandlerFunc) gin.IRoutes {
	this.saveMockMap(remark, relativePath, needAuth)
	return this.rg.Any(relativePath, handlers...)
}

func (this *MyRouterGroup) StaticFile(relativePath, filepath string) gin.IRoutes {
	return this.rg.StaticFile(relativePath, filepath)
}

func (this *MyRouterGroup) Static(relativePath, root string) gin.IRoutes {
	return this.rg.Static(relativePath, root)
}

func (this *MyRouterGroup) StaticFS(relativePath string, fs http.FileSystem) gin.IRoutes {
	return this.rg.StaticFS(relativePath, fs)
}

func (this *MyRouterGroup) joinPaths(absolutePath, relativePath string) string {
	if relativePath == "" {
		return absolutePath
	}

	finalPath := path.Join(absolutePath, relativePath)
	appendSlash := this.lastChar(relativePath) == '/' && this.lastChar(finalPath) != '/'
	if appendSlash {
		return finalPath + "/"
	}
	return finalPath
}

func (this *MyRouterGroup) lastChar(str string) uint8 {
	if str == "" {
		panic("路由匹配符不能为空")
	}
	return str[len(str)-1]
}

func (this *MyRouterGroup) saveMockMap(remark, relativePath string, needAuth bool) {
	path := this.joinPaths(this.groupRelativePath, relativePath)
	authenticationPaths = append(authenticationPaths, path)

	mockMap.Store(this.groupTag, RouterConfig{
		Url:      path,
		Remark:   remark,
		NeedAuth: needAuth,
	})
}

type MockMap struct {
	keys   []string
	values [][]RouterConfig
	m      map[string][]RouterConfig
	lock   *sync.RWMutex
}

func NewMockMap() *MockMap {
	return &MockMap{
		keys:   []string{},
		values: [][]RouterConfig{},
		m:      map[string][]RouterConfig{},
		lock:   new(sync.RWMutex),
	}
}

func (this *MockMap) Store(data string, val RouterConfig) *MockMap {
	this.lock.Lock()
	defer this.lock.Unlock()
	if _, ok := this.m[data]; ok {
		i := 0
		for index, v := range this.keys {
			if v == data {
				i = index
				break
			}
		}
		this.values[i] = append(this.values[i], val)
		this.m[data] = this.values[i]
		return this
	}
	this.keys = append(this.keys, data)
	value := []RouterConfig{val}
	this.values = append(this.values, value)
	this.m[data] = value
	return this
}

func (this *MockMap) Load(key string) ([]RouterConfig, bool) {
	this.lock.RLock()
	defer this.lock.RUnlock()
	v, ok := this.m[key]
	return v, ok
}

func (this *MockMap) Count() int {
	this.lock.RLock()
	defer this.lock.RUnlock()
	if this.m == nil {
		return 0
	}
	return len(this.m)
}

func (this *MockMap) Keys() []string {
	return this.keys
}

func (this *MockMap) Values() [][]RouterConfig {
	return this.values
}

func (this *MockMap) Range(fn func(key string, val []RouterConfig)) {
	for _, k := range this.keys {
		v, _ := this.Load(k)
		fn(k, v)
	}
}
