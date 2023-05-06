import express, {Application} from "express"
import dotenv from "dotenv"
import path from "path"
import http from "http"
import {Server} from "socket.io"
import morgan from "morgan"


dotenv.config()
const PORT = process.env.PORT || 3000

// Servers
const app:Application = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))


io.on("connection", (socket: any) => {
    console.log("New WS Connection")

    socket.on("message", function (message: any) {
        console.log(message)
    })
})



server.listen(PORT, () => {
    console.log(`Server started on port ${PORT} \nCheckout the link http://localhost:3000 to begin`)
})
