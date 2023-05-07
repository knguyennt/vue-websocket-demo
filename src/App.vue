<template>
    <div>
      <h1>WebSocket Demo</h1>
      <input type="text" v-model="message" />
      <button @click="sendMessage">Send Message</button>
      <ul>
        <li v-for="msg in messages" :key="msg">{{ msg }}</li>
      </ul>
    </div>
</template>

<script>
import { io } from "socket.io-client";

export default {
  data() {
    return {
      message: "",
      messages: [],
    };
  },
  mounted() {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("message", (data) => {
      console.log(data);
      this.messages.push(data);
    });
  },
  methods: {
    sendMessage() {
      const socket = io("http://localhost:3000");
      socket.emit("message", this.message);
      this.message = "";
    },
  },
};
</script>
