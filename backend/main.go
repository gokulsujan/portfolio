package main

import (
	"portfolio_mailer/config"
	"portfolio_mailer/controller"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init(){
	config.LoadEnvVariables()
	config.ConnectToSMTP()
}

func main(){
	r := gin.Default()
	    // Use the CORS middleware to enable CORS
		config := cors.DefaultConfig()
		config.AllowOrigins = []string{"http://localhost:3000"} // Allow requests from this origin
		config.AllowMethods = []string{"GET", "POST"}          // Allow specified HTTP methods
		r.Use(cors.New(config))
		
	r.POST("/send-msg", controller.SendEmail)
	r.Run()
}