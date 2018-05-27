mp.events.addCommand("sv", (player, fullText, arg0) => {
    if(player.vehicle) {

      if(arg0 == null) {
        return;
      }

      var vehicle = player.vehicle;
      var primary_colors = [];
      var secondary_colors = [];

      if(vehicle.getColorRGB(0) == null || vehicle.getColorRGB(1) == null) {
        primary_colors = [25, 25, 25];
        secondary_colors = [25, 25, 25];
      } else {
        primary_colors = vehicle.getColorRGB(0);
        secondary_colors = vehicle.getColorRGB(1);
      }

      let car_to_array = [
        // Model hash
        vehicle.model,

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
      if(player.getVariable("'" +arg0+ "'") != null) {
        player.notify("Dieser Fahrzeugslot ist bereits besetzt");
      } else {
        player.setVariable("'" +arg0+ "'", car_to_array);
        player.notify("Fahrzeug in Variable "+ arg0 +" gespeichert");
      }
    }

});

mp.events.addCommand("lv", (player, fullText, arg0) => {

    if(arg0 == null) {
      player.notify("Kein Slot angegeben");
      return;
    }

    player.notify("Lade Fahrzeugslot" + arg0);
    var c = player.getVariable("'"+arg0+"'");
    if(c == null) {
      player.notify("In diesem Fahrzeugslot wurde kein Fahrzeug gespeichert")
      return;
    }
    var veh = mp.vehicles.new(c[0], player.position);
    player.notify("Fahrzeug erstellt");
    player.notify("Lade Modifikationen");

    veh.setColorRGB(c[1], c[2], c[3], c[4], c[5], c[6]);
    veh.setMod(0, c[7]);
    veh.setMod(1, c[8]);
    veh.setMod(2, c[9]);
    veh.setMod(3, c[10]);
    veh.setMod(4, c[11]);
    veh.setMod(5, c[12]);
    veh.setMod(6, c[13]);
    veh.setMod(7, c[14]);
    veh.setMod(8, c[15]);
    veh.setMod(9, c[16]);
    veh.setMod(10, c[17]);
    veh.setMod(11, c[18]);
    veh.setMod(12, c[19]);
    veh.setMod(13, c[20]);
    veh.setMod(14, c[21]);
    veh.setMod(15, c[22]);
    veh.setMod(16, c[23]);
    veh.setMod(18, c[24]);
    veh.setMod(20, c[25]);
    veh.setMod(22, c[26]);
    veh.setMod(23, c[27]);
    veh.setMod(24, c[28]);
    veh.setMod(25, c[29]);
    veh.setMod(27, c[30]);
    veh.setMod(28, c[31]);
    veh.setMod(30, c[32]);
    veh.setMod(33, c[33]);
    veh.setMod(34, c[34]);
    veh.setMod(35, c[35]);
    veh.setMod(38, c[36]);
    veh.setMod(48, c[37]);
    veh.setMod(62, c[38]);
    veh.setMod(69, c[39]);

    player.notify("Modifikationen geladen und angewendet");

    player.putIntoVehicle(veh, -1);
});

//TODO: delete vehicle

mp.events.addCommand('dv', (player, fullText, arg0) => {
  if(arg0 != null) {
    player.notify("Diese Funktion ist noch in Entwicklung. Nutze einfach einen neuen Slot.");
  } else {
    player.notify("Gebe den zu löschenden Fahrzeugslot ein");
  }
});
