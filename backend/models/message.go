package models

type Message struct {
	Name string `json:"name"`
	Email string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}