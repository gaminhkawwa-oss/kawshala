const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "hYFXmIaa#EitgDnVhNpRvz6dZjMk4J_urTPp7XQvp78xY96YuhBI",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.pinimg.com/1200x/3f/b4/70/3fb470223d4c1006a88e4f4430f8ba67.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 KAWWA-MD Is Alive Now😍*",
BOT_OWNER: '94710189823',  // Replace with the owner's phone number
AUTO_STATUS_SEEN: 'true',
AUTO_STATUS_REACT: 'true',



};
