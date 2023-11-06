package config

import (
	"os"

	"gopkg.in/gomail.v2"
)

var Sender *gomail.Dialer

func ConnectToSMTP(){
	Sender = gomail.NewDialer(os.Getenv("SMTPSERVER"), 587, os.Getenv("SMTPUSERNAME"), os.Getenv("SMTPPASSWORD"))
}