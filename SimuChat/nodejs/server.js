const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

// util functions
const formatMessage = require("./utils/messages");
const {
	userJoin,
	userLeave,
	getCurrentUser,
	getRoomUsers,
} = require("./utils/users");

// helpers
const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// bot
const botName = "Sniff";

// run when client connects
io.on("connection", (socket) => {
	// inside the room
	socket.on("joinRoom", ({ username, room }) => {
		const user = userJoin(socket.id, username, room);

		socket.join(user.room);

		// welcome current user
		socket.emit("message", formatMessage(botName, "Welcome to SimuChat !"));

		//broadcast when user connects
		socket.broadcast
			.to(user.room)
			.emit(
				"message",
				formatMessage(botName, `${user.username} has joined the chat.`),
			);

		// send users and room info
		io.to(user.room).emit("roomUsers", {
			room: user.room,
			users: getRoomUsers(user.room),
		});
	});

	// listen for chat message
	socket.on("chatMessage", (msg) => {
		const user = getCurrentUser(socket.id);
		io.to(user.room).emit("message", formatMessage(user.username, msg));
	});

	// run when client disconnects
	socket.on("disconnect", () => {
		const user = userLeave(socket.id);
		if (user) {
			io.to(user.room).emit(
				"message",
				formatMessage(botName, `${user.username} has left the chat.`),
			);

			// send users and room info
			io.to(user.room).emit("roomUsers", {
				room: user.room,
				users: getRoomUsers(user.room),
			});
		}
	});
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
