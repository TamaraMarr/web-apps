var memoryAlert = require('./checkMemory');

// var observer = function (name) {
//     this.name = name;

//     var notify = function () {
//         console.log(name + ': Memory too low!');
//     }
//     return {
//         notify: notify
//     }
// }

class Observer {
	constructor(name) {
		this.name = name;
	}
	get notifyMe() {
		return this.notify;
	}
	notify() {
		console.log(this.name + ': Memory too low!');
	}
}

var subject = function () {
	var listOfObservers = [];

	var addObserver = function (observer) {
		listOfObservers.push(observer);
	};

	var notifyAll = function () {
		for (var i = 0; i < listOfObservers.length; i++) {
			listOfObservers[i].notify();
		}
	};

	var check = function () {
		if (memoryAlert.interval(2000)) {
			notifyAll();
		}
	};
	return {
		addObserver: addObserver,
		notifyAll: notifyAll,
		check: check
	};
};
// class Subject {
// 	constructor(name) {
// 		this.name = name,
// 		this.listOfObservers = [];
// 	}


// 	get checkMe() {
// 		return this.check;
// 	}

// 	get notifyAll() {
// 		return this.notifyAlls;
// 	}

// 	get addObservers() {
// 		return this.addObservers;
// 	}
// 	addObserver(observer) {
// 		this.listOfObservers.push(observer);
// 	}

// 	notifyAlls() {
// 		for (var i = 0; i < this.listOfObservers.length; i++) {
// 			console.log('Hey!');
// 			this.listOfObservers[i].notify();
// 		}
// 	}

// 	check() {
// 		if (memoryAlert.interval(2000)) {
// 			// console.log("Hey!");
// 			this.notifyAll;
// 		}
// 	}
// }
var s1 = subject();

// var o1 = observer("Alertko");
var o1 = new Observer('Alertko');
s1.addObserver(o1);
setInterval(s1.check, 1000);
