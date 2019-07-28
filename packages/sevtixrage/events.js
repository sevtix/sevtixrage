function playerJoinHandler(player) {
    player.position = new mp.Vector3(-425, 1123, 328);
    player.heading = 340;
 }
mp.events.add("playerJoin", playerJoinHandler);

function playerDeathHandler(player, reason, killer) {
  player.spawn(player.position);
}
mp.events.add("playerDeath", playerDeathHandler);

// VEHICLE SAVING

let onSavePlayerVehicle = (player, name, storageIndex) => {
  // LOAD PLAYER VEHICLE
  if(player.vehicle != null){
      var vehicle = player.vehicle;
      var primary_colors = [];
      var secondary_colors = [];

      if(vehicle.getColorRGB(0) == null || vehicle.getColorRGB(1) == null) {
        primary_colors = [0, 0, 0];
        secondary_colors = [0, 0, 0];
      } else {
        primary_colors = vehicle.getColorRGB(0);
        secondary_colors = vehicle.getColorRGB(1);
      }

      let car_to_array = [
        // Model name
        name,

        // Primary Color
        primary_colors[0],
        primary_colors[1],
        primary_colors[2],

        // Secondary Color
        secondary_colors[0],
        secondary_colors[1],
        secondary_colors[2],

        // 7 Spoiler
        vehicle.getMod(0),

        // 8 Front Bumper
        vehicle.getMod(1),

        // 9 Rear Bumper
        vehicle.getMod(2),

        // 10 Side Skirt
        vehicle.getMod(3),

        // 11 Exhaust
        vehicle.getMod(4),

        // 12 Frame
        vehicle.getMod(5),

        // 13 Grille
        vehicle.getMod(6),

        // 14 Hood
        vehicle.getMod(7),

        // 15 Fender
        vehicle.getMod(8),

        // 16 Right Fender
        vehicle.getMod(9),

        // 17 Roof
        vehicle.getMod(10),

        // 18 Engine
        vehicle.getMod(11),

        // 19 Brakes
        vehicle.getMod(12),

        // 20 Transmission
        vehicle.getMod(13),

        // 21 Horn
        vehicle.getMod(14),

        // 22 Suspension
        vehicle.getMod(15),

        // 23 Armor
        vehicle.getMod(16),

        // 24 Turbo
        vehicle.getMod(18),

        // 25 Util Shadow Silver
        vehicle.getMod(20),

        // 26 Xenon
        vehicle.getMod(22),

        // 27 Front Wheels
        vehicle.getMod(23),

        // 28 Back Wheels
        vehicle.getMod(24),

        // 29 Plate Holders
        vehicle.getMod(25),

        // 30 Trim design
        vehicle.getMod(27),

        // 31 Ornaments
        vehicle.getMod(28),

        // 32 Dial design
        vehicle.getMod(30),

        // 33 Steering wheel
        vehicle.getMod(33),

        // 34 Shift lever
        vehicle.getMod(34),

        // 35 Plaque
        vehicle.getMod(35),

        // 36 Hydraulics
        vehicle.getMod(38),

        // 37 Livery
        vehicle.getMod(48),

        // 38 Plate
        vehicle.getMod(62),

        // 39 Window tint
        vehicle.getMod(69)
      ];

      /*if(player.getVariable("'" +arg0+ "'") != null) {
        player.notify("Dieser Fahrzeugslot ist bereits besetzt");
      } else {
        player.setVariable("'" +arg0+ "'", car_to_array);
        player.notify("Fahrzeug in Variable "+ arg0 +" gespeichert");
      }*/

        var fs = require('fs');
        var file = fs.createWriteStream("vehicles/"+player.name+"_"+storageIndex+".json");
        file.on('error', function(err) {player.notify(err)});
        file.write(JSON.stringify(car_to_array));
        file.end();
      } else {
        player.notify("You aren't in a car");
      }
};
mp.events.add("savePlayerVehicle", onSavePlayerVehicle);

// VEHICLE LOADING

let onLoadPlayerVehicle = (player, storageIndex) => {
  // SAVE PLAYER VEHICLE
  var c = {};

  fs.readFile("vehicles/"+player.name+"_"+storageIndex+".json", function read(err, data) {
    if (err) {
        throw err;
    }
    c = JSON.parse(data);
    var veh = mp.vehicles.new(mp.joaat(c[0]), player.position);
    veh.setColorRGB(parseInt(c[1]), parseInt(c[2]), parseInt(c[3]), parseInt(c[4]), parseInt(c[5]), parseInt(c[6]));
    veh.setMod(0, parseInt(c[7]));
    veh.setMod(1, parseInt(c[8]));
    veh.setMod(2, parseInt(c[9]));
    veh.setMod(3, parseInt(c[10]));
    veh.setMod(4, parseInt(c[11]));
    veh.setMod(5, parseInt(c[12]));
    veh.setMod(6, parseInt( c[13]));
    veh.setMod(7, parseInt(c[14]));
    veh.setMod(8, parseInt(c[15]));
    veh.setMod(9, parseInt(c[16]));
    veh.setMod(10, parseInt(c[17]));
    veh.setMod(11, parseInt(c[18]));
    veh.setMod(12, parseInt(c[19]));
    veh.setMod(13, parseInt(c[20]));
    veh.setMod(14, parseInt(c[21]));
    veh.setMod(15, parseInt(c[22]));
    veh.setMod(16, parseInt(c[23]));
    veh.setMod(18, parseInt(c[24]));
    veh.setMod(20, parseInt(c[25]));
    veh.setMod(22, parseInt(c[26]));
    veh.setMod(23, parseInt(c[27]));
    veh.setMod(24, parseInt(c[28]));
    veh.setMod(25, parseInt(c[29]));
    veh.setMod(27, parseInt(c[30]));
    veh.setMod(28, parseInt(c[31]));
    veh.setMod(30, parseInt(c[32]));
    veh.setMod(33, parseInt(c[33]));
    veh.setMod(34, parseInt(c[34]));
    veh.setMod(35, parseInt(c[35]));
    veh.setMod(38, parseInt(c[36]));
    veh.setMod(48, parseInt(c[37]));
    veh.setMod(62, parseInt(c[38]));
    veh.setMod(69, parseInt(c[39]));


    if(player.vehicle == null) {
      player.putIntoVehicle(veh, -1);
    } else {
      player.vehicle.destroy();
      player.putIntoVehicle(veh, -1);
    }

    
  });
};
mp.events.add("loadPlayerVehicle", onLoadPlayerVehicle);