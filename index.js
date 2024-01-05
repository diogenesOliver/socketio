const express = require('express')
const app = express()

const path = require('path')
const socketIO = require('socket.io')

app.use('/', express.static(path.join(__dirname, 'public')))

const server = app.listen(3000, () => {
    console.log('Server running...')
})

const messages = []

const io = socketIO(server)
io.on('connect', (scoket) => {
    console.log('New connection')

    socket.on('new_message', data => {
        messages.push(data.msg)

        io.emmit('update_messages')
    }) 
})