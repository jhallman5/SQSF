const express = require('express')
const path = require('path')
const router = require('./controllers/routes')

const server = express()
const PORT = process.env.PORT || 9000

server.use(express.static(path.join(__dirname, '../dist')))
server.use(router)

server.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})
