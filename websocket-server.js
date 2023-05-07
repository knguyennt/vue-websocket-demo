const io = require("socket.io")(3000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  socket.on("", () => {
    console.log("User disconnected");
  });
});
