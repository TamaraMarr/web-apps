var observer = function(name) {
    var myName = name;

    var notifyMe = function(message) {
        console.log(name + ' Desilo se! ' + message);
    }

    var tellMe = function(message) {
console.log(name + ' Its happened ' + message);
    }

    return {
        notify: notifyMe,
        tellMe: tellMe
    }
}

var subject = function() {
    var observers = [];

    var addObserver = function(observer) {
        observers.push(observer);
    }

    var check = function () {
        for (var i = 0; i < 100; i++) {
            if (i % 11 === 0) {
                notifyAll(i);
            }
        } 
    }

    var notifyAll = function (number) {
        for (var i = 0; i < observers.length; i++) {
            observers[i](number);
        }
    }

    return {
        addObserver: addObserver,
        check: check
    }
}

var s = subject();
var o1 = observer('Lampica');
var o2 = observer('Sirena');
var o3 = observer('Special');

s.addObserver(o1.notify);
s.addObserver(o2.notify);
s.addObserver(o3.tellMe);
s.check();