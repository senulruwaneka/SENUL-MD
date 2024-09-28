const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zf5QibQS#v_g4DwYmBkxeO3prNdFbJzjvSVCG0hw2m1ZVwVWZQPs",
MONGODB: process.env.MONGODB || "mongodb://mongo:tZqOskNPFBvoJwXqFTbicqRdmVMzqKtt@autorack.proxy.rlwy.net:59140",
