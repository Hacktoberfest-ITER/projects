// dom elements
const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const usersList = document.getElementById("users");

// get username and room from URL
const { username, room } = Qs.parse(location.search, {
	ignoreQueryPrefix: true,
});

const socket = io();

// join chatroom
socket.emit("joinRoom", { username, room });

// message from server
socket.on("message", (message) => {
	outputMessage(message);

	// scroll to latest message'
	chatMessages.scrollTop = chatMessages.scrollHeight;
});

// get room and users
socket.on("roomUsers", ({ room, users }) => {
	outputRoomName(room);
	outputUsers(users);
});

// message submit
chatForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// get message text from chatbox
	const msg = e.target.elements.msg.value;

	//emit message to server
	socket.emit("chatMessage", msg);
	e.target.elements.msg.value = "";
	e.target.elements.msg.focus();
});

//output message to dom
function outputMessage(message) {
	const div = document.createElement("div");
	div.classList.add("message");
	div.innerHTML = `
    <p class="meta"> ${message.username} <span> ${message.time}</span></p>
	<p class="text">
    ${message.text}
	</p>
    `;
	document.querySelector(".chat-messages").append(div);
}

// add room name to dom
function outputRoomName(room) {
	roomName.innerText = room;
}

// add users to room
function outputUsers(users) {
	usersList.innerHTML = `
    ${users.map((user) => `<li>${user.username}</li>`).join("")}
    `;
}
