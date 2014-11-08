var requirejs = require('requirejs');


requirejs.config({

	nodeRequire: require
});

requirejs(['foo','bar','woo'],
function (foo, bar, woo ) {
console.log("I have no ");

});
