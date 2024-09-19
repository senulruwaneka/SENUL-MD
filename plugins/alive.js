const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*👋 ⱧɆⱠⱠØ ${pushname}\n\n*𝐈'𝐦 𝐒𝐄𝐍𝐔𝐋-𝐌𝐃 Wₕₐₜₛₐₚₚ Bₒₜ*\n\n𝗿𝗲𝗽𝗼 𝗹𝗶𝗻𝗸 🌝👇https://github.com/senulruwaneka/SENUL-MD\n\n 𝐇𝐀𝐕𝐄 𝐀 𝐍𝐈𝐂𝐄 𝐃𝐀𝐘 💗🌝\n\n> *© ᴘᴏᴡᴇʀ ʙʏ ꜱᴇɴᴜʟ-ᴍᴅ*`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
