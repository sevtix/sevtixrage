var blips = {};

mp.events.addCommand("waypoint", (player, fullText, arg0) => {
	if(arg0 == "delete") {
		mp.blips[player.id].destroy();
	}

	if(arg0 == "create") {
		mp.blips[player.id] = mp.blips.new(1, player.position);
		mp.blips[player.id].name = player.name + "'s Wegpunkt";
	}
});