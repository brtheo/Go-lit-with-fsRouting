package main

import (
	"context"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetRoutes() (routes []Route) {

	wd, err := os.Getwd()
	check(err)

	routesMap := make(map[string][]string)
	routesArr := make([]string, 0)

	routesMap, routesArr = recursiveRoute(filepath.Join(wd, "frontend", "src", "pages"), "/", routesMap, routesArr)

	routes = makeRoutes(routesMap)
	fmt.Println(routes)
	return
}

func recursiveRoute(path, pathPrefix string, routesMap map[string][]string, routes []string) (map[string][]string, []string) {
	entries, err := os.ReadDir(path)
	check(err)
	dirs := strings.Split(path, "/")

	if dirs[len(dirs)-1] != "pages" {
		pathPrefix += dirs[len(dirs)-1] + "/"
	} else {
		routesMap = make(map[string][]string)
	}
	routes = mapTo(entries, fs.DirEntry.Name)

	routes, subRoutes := filterWithOpt(routes, strings.HasSuffix, ".ts")
	routes = transformTo(routes, strings.TrimSuffix, ".ts")

	// fmt.Println("ROUTES :", routes)
	// fmt.Println("SUBROUTES :", subRoutes)
	// var reroutes []string

	routes = transformTo(routes, Prepend, "/")
	// routes = transformTo(routes, strings.TrimSuffix, "index")
	routesMap[pathPrefix] = routes

	var tempMap map[string][]string
	for _, route := range subRoutes {
		tempMap, routes = recursiveRoute(filepath.Join(path, route), pathPrefix, routesMap, routes)
		// routes = append(routes, reroutes...)
		for k, v := range tempMap {
			routesMap[k] = v
		}
	}

	return routesMap, routes
}

func makeRoutes(m map[string][]string) (routes []Route) {
	routes = make([]Route, 0)
	for dir, files := range m {
		for i := 0; i <= len(files)-1; i++ {
			file := files[i]
			file = strings.TrimPrefix(file, "/")
			cmp := file
			var args []string
			path := dir
			if strings.HasSuffix(dir, "/") && len(dir) > 1 {
				path = strings.TrimSuffix(dir, "/")
			}
			if len(strings.Split(dir, "/")) > 2 {
				dirs := strings.Split(dir, "/")
				fmt.Println(strings.Split(dir, "/"))
				cmp = dirs[len(dirs)-2]
				if strings.Contains(file, "[") {
					formatedFileName := ReplaceDynamicPattern(file)
					path += "/" + formatedFileName
					args = delete_empty(strings.Split(file, ":"))
				}
			}

			r := Route{
				cmp + "-page",
				path,
				dir + file,
				args,
			}
			routes = append(routes, r)
		}
	}
	return
}
