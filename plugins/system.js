const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    react: "💻",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `┌───────────────────────
├ ⏰ *Runtime:-* ${runtime(process.uptime())}
├ 📟 *Ram usage:-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *Platform:-* ${os.hostname()}
├ 👨‍💻 *Owners:-* *ꜱᴇɴᴜʟ-ᴍᴅ*
├ 🧬 *Version:-* 1.0.0
└───────────────────────

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴇɴᴜʟ-ᴍᴅ*
`
return reply(`${status}`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})
