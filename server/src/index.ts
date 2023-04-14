import { Socket } from "socket.io"
import config from "./config"
import logger from "./function/logger"

// === Express & http ===
const express = require("express")
const app: Express.Application = express()

const http = require("http")
const server = http.createServer(app)

// === Socket.io ===
const { Server } = require("socket.io")
const io = new Server(server, {

  // corsの設定
  cors: {
    origin: [
      `http://${config.client.host}:${config.client.port}`,
      `http://localhost:${config.client.port}`
    ]
  }
})

interface Data {
  user: {
    name: string
  }
  message: string
}

//* 接続
io.on("connection", (socket: Socket) => {
  // logger("Socket.io", "Connecting with client.", "\x1b[35m")

  //* メッセージが送信された
  socket.on("send_message", (data: Data) => {
    io.emit("recived_message", data)
  })

  //* 切断
  // socket.on("disconnect", () => {
  //   logger("Socket.io", "Disconnected from client", "\x1b[35m")
  // })
})

// === Server listen ===
server.listen(config.server.port, () => logger("API Server", `Listening on port: ${config.server.port}`, "\x1b[36m"))