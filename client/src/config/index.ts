const Config = {
  client: {
    host: process.env.NEXT_PUBLIC_CLIENT_HOST,
    port: process.env.NEXT_PUBLIC_CLIENT_PORT
  },
  server: {
    host: process.env.NEXT_PUBLIC_SERVER_HOST,
    port: process.env.NEXT_PUBLIC_SERVER_PORT
  }
}

export default Config