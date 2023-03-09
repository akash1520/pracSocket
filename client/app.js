const WebSocket = require("ws")x    
const socket = new WebSocket("ws://localhost:8080")

socket.onmessage = ({data})=>{
    console.log('Message from server',data)
}

document.getElementById('button').onclick= ()=>{
    socket.send("hello")
}