const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, Func, fetchJson} = require('../lib/functions')
const axios = require('axios')
cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu =`*👋 Hello ${pushname}*
 - 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 🤍

👨‍💻 *Welcome to SENUL-MD* 👨‍💻 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ 」
│◈ *яυηтιмє* *${runtime(process.uptime())}*
│◈ *σωηєя ηαмє* 𝗡𝗜𝗥𝗢
│◈ *σωηєя ηυмвєя* 94762296665
╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 .ig
.apk
.apkdl
.twitter
.gdrive
.mediafire
.fb
.song
.video
.tt

╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 .menu
.about
.alive
.ping
.system
.runtime

╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 .animegirl
.dog
.fact
.hack
.joke
.quote
.rvideo

╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 .convert

╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 .yts

╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 .promote
.demote
.remove
.add
.setgoodbye
.setwelcome
.getpic

╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 .shutdown
.broadcast
.setpp
.block
.unblock
.clearchats
.jid
.gjid
.restart

╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 .ai
.define
.githubstalk
.gpass
.movie
.news
.srepo
.trt
.weather

╰───────────●●►
╭──────────●●►
 💃 *𝐕𝐨𝐢𝐜𝐞 𝐌𝐞𝐧𝐮*
  ───────
 Ane
 Hurathal wenna epa
 hi
 mk
 gn
 gm
 pissuda

╰───────────●●►
╰───────────●●►

*©ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇɴᴜʟ-ᴍᴅ*👨‍💻`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
