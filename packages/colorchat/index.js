function Random(min, max) {
	let Number = Math.round(Math.random()*(max-min)+min);
	return Number;
}

mp.events.add({
    "playerJoin" : player => {
		player.data.ChatColor = [Random(0, 255), Random(0, 255), Random(0, 255)]; // get random color for player
    },
	"playerChat" : (player, message) => {
		let PlayerColor = player.data.ChatColor;
		if (PlayerColor[0] <= 200 && PlayerColor[1] <= 200 && PlayerColor[2] <= 200) {
			var ColorID = [PlayerColor[0]+(55), PlayerColor[1]+(55), PlayerColor[2]+(55)];
		} else {
			var ColorID = [PlayerColor[0]-(55), PlayerColor[1]-(55), PlayerColor[2]-(55)];
		}
		mp.players.broadcast("!{"+PlayerColor+"}"+player.name+"!{"+ColorID+"}["+player.id+"]!{#FFFFFF}: "+message); // send player message
    }
});