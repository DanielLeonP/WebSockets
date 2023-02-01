const socketController = (socket) => {
    console.log('Cliente conectado.', socket.id);

    socket.on("disconnect", () => {
        console.log('Cliente desconectado.');
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        // const { id, mensaje, fecha } = payload;
        // console.log(`${id} (${fecha}): ${mensaje}`)
        // this.io.emit('enviar-mensaje', payload);
        callback('Callback');

        socket.broadcast.emit('enviar-mensaje', payload)
    })
}

module.exports = {
    socketController
}