const Discord = require("discord.js");
const client = global.client;



client.login(global.Ayarlar.Token).catch(err => {console.error("Geçersiz bir token girmişsin.")});
