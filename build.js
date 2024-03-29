// see a complete list of options here:
// https://github.com/jrburke/r.js/blob/master/build/example.build.js
requirejs.config({
  // all modules loaded are relative to this path
  // e.g. require(["grid/core"]) would grab /lib/grid/core.js
  baseUrl: ".",

  // specify custom module name paths
  paths: {
    // JavaScript folders.
    brejep: "lib/brejep",
    utils: "lib/utils",
    game: "src/game",

    // Libraries
    ash: "lib/ash/ash",
    Stats: "lib/utils/Stats"
  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
    "Stats": {
        "exports": "Stats"
    }
  },

  // target amd loader shim as the main module, path is relative to baseUrl.
  //name: "lib/vendor/almond",

  // Initialize the application with the main application file
  //deps: ["src/dice-racing-app"],
  optimize: "none",

  // files to include along with almond.  only lib/skeleton.js is defined, as
  // it pulls in the rest of the dependencies automatically.
  include: [ "src/dice-racing-app" ],

  // build file destination, relative to the build file itself
  out: "build/diceracing.js"
});
