const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO 👨‍💻* 

*👨‍💻 ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱᴇɴᴜʟ-ᴍᴅ*
👨‍💻 *ɴᴜᴍʙᴇʀ* -: 94762296665

*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱᴇɴᴜʟ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://imgtr.ee/images/2024/09/11/3e6c73da5849ff8b9e48781ab8acbfe4.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
