mp.events.addCommand("v", (player, fullText, arg1) => {
    let veh = mp.vehicles.new(mp.joaat(arg1), player.position);
    player.putIntoVehicle(veh, -1);
    player.notify("Neues Fahrzeug wurde erstellt");
});

mp.events.addCommand("r", (player, fullText) => {
  player.vehicle.repair();
  player.notify("Dein Fahrzeug wurde repariert");
});

mp.events.addCommand("h", (player, fullText) => {
  player.health = 100;
  player.notify("Du wurdest geheilt");
});

mp.events.addCommand('m', (player, fullText, arg1 , arg2) => {
  if(player.vehicle) {
    player.vehicle.setMod(parseInt(arg1), parseInt(arg2));
  }
  player.notify("Modifikation wurde angewendet");

});

mp.events.addCommand('c', (player, fullText, arg1 , arg2, arg3, arg4, arg5, arg6) => {
  if(player.vehicle) {
    player.vehicle.setColorRGB(parseInt(arg1), parseInt(arg2), parseInt(arg3), parseInt(arg4), parseInt(arg5), parseInt(arg6));
  }
  player.notify("Färbung wurde angewendet");

});

mp.events.addCommand('p', (player, fullText) => {
  player.notify("Deine Position: " + player.position);
  player.notify("Deine Rotation: " + player.heading);
});

mp.events.addCommand('help', (player, fullText) => {
  player.outputChatBox("Verfügbare Befehle:");
  player.outputChatBox("/v <name> - Spawnt ein Fahrzeug");
  player.outputChatBox("/r - Repariert ein Fahrzeug");
  player.outputChatBox("/h - Heilt dich");
  player.outputChatBox("/m <type> <selection> - Wendet Fahrzeugmodifikationen an");
  player.outputChatBox("/c <r1> <g1> <b1> <r2> <g2> <b2> - Wendet Färbungen an");
  player.outputChatBox("/sv <slot/name> - Speichert ein Fahrzeug");
  player.outputChatBox("/lv <slot/name> - Lädt und Spawnt ein gespeichertes Fahrzeug");
  player.outputChatBox("/dv <slot/name> - Löscht ein gespeichertes Fahrzeug");
  player.outputChatBox("/p - Deine Position");
});
