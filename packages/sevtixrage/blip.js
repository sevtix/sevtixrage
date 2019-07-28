var blips = {};
const BlipIcon = 1;
const BlipColor = 4;

function playerJoinHandler(player) {
	blips[player.id] = mp.blips.new(BlipIcon, player.position);
	blips[player.id].name = player.name;
	blips[player.id].dimension = player.dimension;
	blips[player.id].colour = BlipColor;
 }

 mp.events.add("playerJoin", playerJoinHandler);

mp.events.add('playerSpawn', (player) =>
{
	if (blips[player.id]) {
		blips[player.id].destroy();
	}
});

mp.events.add('playerDeath', (player, reason, killer) => {
	if (blips[player.id]) {
		blips[player.id].destroy();
	}
});

mp.events.add('playerQuit', (player, exitType, reason) => {
	if (blips[player.id]) {
		blips[player.id].destroy();
	}
});

function UpdateBlipPositions()
{
	mp.players.forEach( (player, id) => {
		if (blips[player.id] && player.health > 0) {
			blips[player.id].position = player.position;
		}
	});
}

setInterval(function(){
	UpdateBlipPositions();
}, 100);