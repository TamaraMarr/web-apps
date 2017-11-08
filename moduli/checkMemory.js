// var monitor = require("os-monitor");

// monitor.start({
//     delay: 1000,
//     freemem: 100000000
// });


// var alertMe = monitor.on('freemem', function(event) {
//     console.log('Free memory is very low!');
// });



// module.exports.alertMe = alertMe;


var os = require('os');

function interval(ram) {
	var memory = os.freemem() / 1024 / 1024;
	console.log(memory);
	if (memory < ram) {
		// console.log('ALERT');
		return true;
	}
	return false;
}

// setInterval(interval, 1000);

module.exports.interval = interval;