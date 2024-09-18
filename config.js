const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put session_id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/ggrmtk2/IMG-20240918-WA0034.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "👋 Hello *${pushname}*\n*I AM SENUL-MD I AM ALIVE NOW !*",
SUDO_NB: process.env.SUDO_NB || "94762296665",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public"
};

