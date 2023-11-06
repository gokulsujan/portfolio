package controller

import (
	"fmt"
	"net/http"
	"portfolio_mailer/config"
	"portfolio_mailer/models"

	"github.com/gin-gonic/gin"
	"gopkg.in/gomail.v2"
)

func SendEmail(c *gin.Context){
	var message models.Message
	if err:= c.ShouldBind(&message); err != nil {
		fmt.Println(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"status":"false", "error":err.Error()})
		return
	}
	// Create a new message
	m := gomail.NewMessage()

	// Set the sender and recipient
	m.SetHeader("From", "noreply@gokulsujan.me")
	m.SetHeader("To", "gokulsujantvm@gmail.com")

	// Set the email subject
	m.SetHeader("Subject", message.Subject)

	// Set the email body
	m.SetBody("text/plain", message.Message + " The sender mail id is : "+message.Email)

	// Send the email
	if err := config.Sender.DialAndSend(m); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status":"false", "error":err.Error()})
		return
	}
	c.JSON(http.StatusAccepted, gin.H{"status":"true", "message":"Message delivered."})
}