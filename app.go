package main

import (
	"context"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func mapTo[Type, ReturnType any](data []Type, f func(Type) ReturnType) (res []ReturnType) {

	res = make([]ReturnType, 0, len(data))

	for _, e := range data {
		res = append(res, f(e))
	}

	return
}
func transformTo[Type, ReturnType any](data []Type, f func(Type, string) ReturnType, opt string) (res []ReturnType) {

	res = make([]ReturnType, 0, len(data))

	for _, e := range data {
		res = append(res, f(e, opt))
	}

	return
}

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

func (a *App) GetRoutes() (routes []string) {

	wd, err := os.Getwd()
	check(err)

	entries, err := os.ReadDir(filepath.Join(wd, "frontend", "src", "pages"))
	check(err)

	routes = mapTo(entries, fs.DirEntry.Name)
	routes = transformTo(routes, strings.TrimSuffix, ".ts")

	return
}
