package main

import (
	"net/http"
	"os"

	"github.com/labstack/echo"
	"github.com/shotastage/servicestatus/status"
)

func port() string {

	port := os.Getenv("PORT")

	if len(port) == 0 {
		port = "8080"
	}

	return ":" + port
}

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Main screen")
	})

	e.GET("/status_check", status.StatusCheck)
	e.Logger.Fatal(e.Start(":1323"))
}
