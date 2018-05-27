function playerJoinHandler(player) {
    player.notify("Willkommen auf dem Server von sevtix!");
    player.position = new mp.Vector3(-2018, -1040, 2);
    player.heading = 250;
 }

 mp.events.add("playerJoin", playerJoinHandler);

function playerDeathHandler(player, reason, killer) {
  player.spawn(new mp.Vector3(-2018, -1040, 2));
  player.heading = 250;
  player.notify("Du bist gestorben und wurdest an den Spawn teleportiert")
}

mp.events.add("playerDeath", playerDeathHandler);
