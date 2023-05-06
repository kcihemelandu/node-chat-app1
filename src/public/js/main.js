const socket = io()

function sendMsg() {
    socket.emit("message", "HELLO WORLD")
}

sendMsg()
