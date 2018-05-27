require('./commands.js')
require('./events.js')
require('./vehiclesaving.js')

let spawnBlip = mp.blips.new(120, new mp.Vector3(-2018, -1040, 2),
    {
        name: 'Spawnpunkt',
        shortRange: false,
});
