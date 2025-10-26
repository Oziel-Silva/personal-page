package main

import (
	"os"
	"personal-page/internal"

	"github.com/gin-gonic/gin"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	dataPath := os.Getenv("DATA_PATH")
	if dataPath == "" {
		dataPath = "data/datal.yaml"
	}
	store, err := internal.NewYAMLStore(dataPath)
	if err != nil {
		panic(err)
	}
	r := gin.Default()
	h := internal.NewHandlers(store)

	r.GET("/", h.Home)
	r.GET("/healthz", h.Healthz)

	r.Run(":" + port)
}
