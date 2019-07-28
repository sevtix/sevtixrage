let repairVehicle = (player) => {
    if(player.vehicle != null) {
        player.vehicle.repair();
    }
};

mp.events.add("repair", repairVehicle);