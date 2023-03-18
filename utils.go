package main

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

func filterWithOpt[Type any](data []Type, f func(Type, string) bool, opt string) (res []Type, res2 []Type) {

	res = make([]Type, 0, len(data))
	res2 = make([]Type, 0, len(data))

	for _, e := range data {
		if f(e, opt) {
			res = append(res, e)
		} else {
			res2 = append(res2, e)
		}
	}

	return
}

func Prepend(s string, prefix string) string {
	return prefix + s
}

func delete_empty(s []string) (r []string) {
	for _, str := range s {
		if str != "" {
			r = append(r, str)
		}
	}
	return
}

type Route struct {
	Component string
	Path      string
	Filename  string
	Args      []string
}
