const Pterodactyl = require('pterodactyl.js');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
 
const client = new Pterodactyl.Builder()
    .setURL('https://creative.ttr3.tk')
    .setAPIKey('av8tWUa9fIaMVKdfIn6BNFrl6IRmJ8hd2utGrNfyj0KbMGuv')
    .asUser();
 
client.getClientServers()
.then(async servers => {
    let server = servers[4];
 
<<<<<<< HEAD
    await server.sendCommand('"bc Server will restart in 10 seconds"');
    sleep(10000);
=======
    await server.sendCommand('bc Server will restart in 10 seconds')
    sleep(10000)
>>>>>>> parent of 38aa78b... Syntax correction
    await server.restart();
    
 
}).catch(error => console.log(error));