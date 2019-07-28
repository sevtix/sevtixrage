require('./commands.js')
require('./events.js')
require('./route.js')
require('./vehicleeditor.js')


let yacht = mp.blips.new(455, new mp.Vector3(-2018, -1040, 2),
{
        name: 'Yacht',
        shortRange: false,
});

let spawn = mp.blips.new(120, new mp.Vector3(-425, 1123, 328),
{
        name: 'Spawn',
        shortRange: false,
});

let airport = mp.blips.new(307, new mp.Vector3(-1336,-3044,13),
{
        name: 'Airport',
        shortRange: false,
});

let garage = mp.blips.new(473, new mp.Vector3(-395,1194,324.5),
{
        name: 'Garage',
        shortRange: false,
});



mp.vehicles.new(mp.joaat("carbonrs"), new mp.Vector3(-421.9178161621094, 1198.76953125, 324.9917907714844),{heading: 230});
mp.vehicles.new(mp.joaat("blazer4"), new mp.Vector3(-419.0802307128906,1206.7073974609375,324.9909973144531),{heading: 230});
mp.vehicles.new(mp.joaat("baller2"), new mp.Vector3(-417.765380859375,1215.761962890625,325.6416931152344),{heading:231.11407470703125});

var garageMarker = mp.markers.new(1, new mp.Vector3(-395,1194,324.5), 3,{color: [255,255,255,100], visible: true});
var garageColshape = mp.colshapes.newSphere(-395,1194,324.5, 3);
garageColshape.setVariable("id","garageColshape");