const socket = io('http://localhost:3000')

socket.on('update_messages', messages => {
    updateMessagesOnScreen(messages)
})

function updateMessagesOnScreen(messages){
    const divMessages = document.querySelector("#messages")
    let listMessages = '<ul>'
    messages.forEach(message => {
        listMessages += `<li>${message}</li>`
    })
    listMessages += '</ul>'

    divMessages.innerHTML = listMessages
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#message_form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const message = document.forms['message_form']['msg'].value
        document.forms['message_form']['msg'].value = ''

        socket.emit('new_message', {
            msg: message
        })

        console.log(message)
    })
})  