//This is the title for your window tab, and your Radar
document.title = "PMP Mobile Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'I am in love with'}
                  ,{'r':200,'name':'I am using'}
                  ,{'r':300,'name':'I don\'t like'}
                  ,{'r':400,'name':'I dropped'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Platforms",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            {"name":"android", "pc":{"r":150,"t":135},"movement":"c"},
            {"name":"nodeJS", "pc":{"r":70,"t":115},"movement":"c"},
            {"name":"ruby", "pc":{"r":180,"t":115},"movement":"c"},
            {"name":"shell", "pc":{"r":40,"t":135},"movement":"c"},
            {"name":"HTML5", "pc":{"r":170,"t":155},"movement":"c"}
        ]
    },
    { "quadrant": "Test",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
            {"name":"protractor", "pc":{"r":160,"t":45},"movement":"c"},
            {"name":"jasmine", "pc":{"r":90,"t":70},"movement":"c"},
            {"name":"karma", "pc":{"r":70,"t":30},"movement":"c"}
        ]
    },
    { "quadrant": "Development",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"angular", "pc":{"r":60,"t":225},"movement":"c"},
            {"name":"angular-bindonce", "pc":{"r":90,"t":235},"movement":"c"},
            {"name":"moment", "pc":{"r":260,"t":240},"movement":"c"},
            {"name":"cordova", "pc":{"r":290,"t":240},"movement":"c"},
            {"name":"sass", "pc":{"r":160,"t":245},"movement":"c"},
            {"name":"compass", "pc":{"r":160,"t":230},"movement":"c"},
            {"name":"ionic", "pc":{"r":180,"t":210},"movement":"c"},
            {"name":"json3", "pc":{"r":390,"t":225},"movement":"c"}
        ]
    },
    { "quadrant": "Tools",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            {"name":"ant", "pc":{"r":350,"t":315},"movement":"c"},
            {"name":"jenkins", "pc":{"r":90,"t":330},"movement":"c"},
            {"name":"jenkins-pipeline", "pc":{"r":140,"t":345},"movement":"c"},
            {"name":"jenkins-wallDisplay", "pc":{"r":240,"t":335},"movement":"c"},
            {"name":"grunt", "pc":{"r":140,"t":315},"movement":"c"},
            {"name":"yeoman", "pc":{"r":80,"t":290},"movement":"c"},
            {"name":"yeoman-angular-generator", "pc":{"r":140,"t":335},"movement":"c"},
            {"name":"npm", "pc":{"r":170,"t":295},"movement":"c"},
            {"name":"rvm", "pc":{"r":240,"t":300},"movement":"c"},
            {"name":"bower", "pc":{"r":50,"t":322},"movement":"c"}
        ]
    }
];
