import { Client, TextChannel } from "discord.js";

const client = new Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (msg) => {
  if (msg.author.bot == false) {
    if (msg.channel instanceof TextChannel && msg.channel.name === "bot") {
      const content = `[${new Date().toLocaleString()}] ${msg.content}`;
      console.log("send: " + content);
      msg.channel.send(content);
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
