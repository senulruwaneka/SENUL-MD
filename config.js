const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put session_id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/ggrmtk2/IMG-20240918-WA0034.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 ⱧɆⱠⱠØ ${pushname}\n\n*𝐈'𝐦 𝐒𝐄𝐍𝐔𝐋-𝐌𝐃 Wₕₐₜₛₐₚₚ Bₒₜ*\n\n𝗿𝗲𝗽𝗼 𝗹𝗶𝗻𝗸 🌝👇https://github.com/senulruwaneka/SENUL-MD\n\n 𝐇𝐀𝐕𝐄 𝐀 𝐍𝐈𝐂𝐄 𝐃𝐀𝐘 💗🌝\n\n> *© ᴘᴏᴡᴇʀ ʙʏ ꜱᴇɴᴜʟ-ᴍᴅ*",
SUDO_NB: process.env.SUDO_NB || "94762296665",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};

