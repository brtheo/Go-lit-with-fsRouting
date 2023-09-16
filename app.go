package main

import (
	"context"
	"encoding/json"
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

	routesMap, routesArr = recursiveRoute(filepath.Join(wd, "frontend", "src", "pages"), string(os.PathSeparator), routesMap, routesArr)
	jsonStr, err := json.Marshal(routesMap)
	if err != nil {
		fmt.Printf("Error: %s", err.Error())
	} else {
		fmt.Println(string(jsonStr))
	}
	routes = makeRoutes(routesMap)
	// fmt.Println(routes)
	return
}

func recursiveRoute(path, pathPrefix string, routesMap map[string][]string, routes []string) (map[string][]string, []string) {
	entries, err := os.ReadDir(path)
	check(err)
	dirs := strings.Split(path, string(os.PathSeparator))

	if dirs[len(dirs)-1] != "pages" {
		pathPrefix += dirs[len(dirs)-1] + string(os.PathSeparator)
	}
	routes = mapTo(entries, fs.DirEntry.Name)

	routes, subRoutes := filterWithOpt(routes, strings.HasSuffix, ".ts")

	routes = transformTo(routes, strings.TrimSuffix, ".ts")

	routes = transformTo(routes, Prepend, string(os.PathSeparator))

	routesMap[pathPrefix] = routes

	var tempMap map[string][]string
	for _, route := range subRoutes {
		tempMap, routes = recursiveRoute(filepath.Join(path, route), pathPrefix, routesMap, routes)
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
			file = strings.TrimPrefix(file, string(os.PathSeparator))
			cmp := file
			args := false
			path := dir
			if strings.HasSuffix(dir, string(os.PathSeparator)) && len(dir) > 1 {
				path = strings.TrimSuffix(dir, string(os.PathSeparator))
			}
			if len(strings.Split(dir, string(os.PathSeparator))) > 2 {
				dirs := strings.Split(dir, string(os.PathSeparator))
				fmt.Println(strings.Split(dir, string(os.PathSeparator)))
				cmp = dirs[len(dirs)-2]
				if strings.Contains(file, "[") {
					formatedFileName := ReplaceDynamicPattern(file)
					path += string(os.PathSeparator) + formatedFileName

					args = true
				}
			}

			r := Route{
				cmp + "-page",
				strings.ReplaceAll(path, string(os.PathSeparator), "/"),
				strings.ReplaceAll(dir+file, string(os.PathSeparator), "/"),
				args,
			}
			routes = append(routes, r)
		}
	}
	return
}
