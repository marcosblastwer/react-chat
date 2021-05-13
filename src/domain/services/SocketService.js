const io = require('socket.io')();
let users = new Set();

const disconnect = user => {
  users.delete(user);
  userList = Array.from(users);
  const payload = { user, userList };
  io.emit('user disconnected', payload);
}

io.on('connect', (socket) => {
  var currentUser = '';

  socket.on('login', user => {
    currentUser = user;
    users.add(user);
    userList = Array.from(users).sort();
    const payload = { user, userList };
    io.emit('user connected', payload);
  });

  socket.on('disconnect', () => disconnect(currentUser));
  socket.on('logout', user => disconnect(user));

  socket.on('message', message => {
    io.emit('message', message)
  })
})

io.listen(4000, {
  cors: {
    origin: ["http://localhost:3000"]
  }
});
