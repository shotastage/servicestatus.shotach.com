package status

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/labstack/echo"
)

func StatusCheck(c echo.Context) error {

	return c.String(http.StatusOK, "Hello, World!")
}

func checkStatus(uri string) {
	// http: //127.0.0.1:8080/status/health
	client := &http.Client{}
	req, err := http.NewRequest("GET", uri, nil)
	if err != nil {
		// handle error
	}
	resp, err := client.Do(req)
	if err != nil {
		// handle error
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		// handle error
	}

	fmt.Println(body)
}
