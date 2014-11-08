var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,

    paths: {
        // Libraries
        ash: "../lib/ash/ash",
        game: "game/"
    }

});


requirejs(['dice-racing-app'],
          function(App) {
            console.log('damn!');
          });


