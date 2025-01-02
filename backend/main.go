package main

import (
	customwebsocket "chatapplication/websocket"
	"log"
	"net/http"
)

func serverWs(pool *customwebsocket.Pool, w http.ResponseWriter, r *http.Request) {
	log.Println("This is working")
	conn, err := customwebsocket.Upgrade(w, r)
	if err != nil {
		log.Println(err)
		return
	}

	client := &customwebsocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	log.Println("This is working")
	pool := customwebsocket.NewPool()
	go pool.Start()

	// Handle the WebSocket route
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serverWs(pool, w, r)
	})

	// Handle the root route and provide a basic message
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome to the WebSocket server!"))
	})
}

func main() {
	setupRoutes()
	http.ListenAndServe(":8080", nil) // Ensure the server is running on port 8080
}
