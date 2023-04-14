import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import io from "socket.io-client"
import config from '@/config'
import { useState } from 'react'

// socket-apiへの接続
const socket = io(`http://${config.server.host}:${config.server.port}`)

// socket-apiから送信されるメッセージデータの型
interface socketMessageData {
  user: {
    name: string
  }
  message: string
}

interface User {
  name: string
}

export default function Home() {
  // ユーザー名
  const [user, setUser] = useState<User>({
    name: ""
  })

  // メッセージ
  const [text, setText] = useState("")

  // メッセージのログ
  const [messageLog, setMessageLog] = useState<socketMessageData[]>([])

  // socket-apiに情報を送信
  const handleSubmit = () => {
    socket.emit("send_message", {user: user, message: text})
    setText("")
  }

  // socket-apiからメッセージを受け取った時にログを追加する
  socket.on("recived_message", (data: socketMessageData) => {
    setMessageLog([...messageLog, data])
  })

  return (
    <>
    <Head>
      <title>Web Chat App</title>
      <meta name="description" content="Web Chat App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
    <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} placeholder="ニックネームを記入" className={styles.userNameForm} />
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="メッセージを記入" autoComplete="off" />
        <input type="submit" onClick={() => handleSubmit()} />
      </form>
      <div className={styles.message_log}>
        <h3>=== チャットログ ===</h3>
        {messageLog.map((chat) => (
          <div key={chat.message}>{chat.user.name}: {chat.message}</div>
        ))}
      </div>
    </main>
    </>
  )
}
