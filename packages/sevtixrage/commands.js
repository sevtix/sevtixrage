mp.events.addCommand("v", (player, fullText, arg1) => {
    let veh = mp.vehicles.new(mp.joaat(arg1), player.position);
    player.putIntoVehicle(veh, -1);
});

mp.events.addCommand("r", (player, fullText) => {
  player.vehicle.repair();
});

mp.events.addCommand("h", (player, fullText) => {
  player.health = 100;
});

mp.events.addCommand('m', (player, fullText, arg1 , arg2) => {
  if(player.vehicle) {
    player.vehicle.setMod(parseInt(arg1), parseInt(arg2));
  }
});

mp.events.addCommand('spawn', (player, fullText) => {
  player.position = new mp.Vector3(-425, 1123, 328);
  player.heading = 340;
});

mp.events.addCommand('c', (player, fullText, arg1 , arg2, arg3, arg4, arg5, arg6) => {
  if(player.vehicle) {
    player.vehicle.setColorRGB(parseInt(arg1), parseInt(arg2), parseInt(arg3), parseInt(arg4), parseInt(arg5), parseInt(arg6));
  }

});

mp.events.addCommand('p', (player, fullText) => {
  player.notify("Deine Position: " + player.position);
  player.notify("Deine Rotation: " + player.heading);
});

mp.events.addCommand('savepos', (player, fullText, arg0) => {
  var fs = require('fs');
  var file = fs.createWriteStream("positions/"+arg0+".json");
  file.on('error', function(err) { player.notify("error"); });
  file.write(player.position.x+","+player.position.y+","+player.position.z+"),{heading:"+player.heading+"});");
  file.end();
  player.notify("position saved");
});

mp.events.addCommand('help', (player, fullText) => {
  player.outputChatBox("Available Commands:");
  player.outputChatBox("F2 - sevtixRAGE Menu");
  player.outputChatBox("F4 - Vehicles");
  player.outputChatBox("F8 - Upgrades");
  player.outputChatBox("/h - Heals you");
  player.outputChatBox("/c <r1> <g1> <b1> <r2> <g2> <b2> - Applies color");
  player.outputChatBox("/p - Get your position");
});
