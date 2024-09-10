const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put sesion_id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/c8858afdce80eeb01b47e.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "👋 Hello *${pushname}*\n👋 HELLO, I AM SENUL-MD I AM ALIVE NOW !",
SUDO_NB: process.env.SUDO_NB || "94762296665",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true"
};

