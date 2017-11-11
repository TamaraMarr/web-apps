var doSomeWork = function (transportService, dest) {
    console.log(transportService.transportTo() + dest);
}

var carTransportService = function() {
    var transportTo = function() {
        return "Driving to: ";
    }
    return {
        transportTo: transportTo
    }
}

var planeTransportService = function() {
    var transportTo = function() {
        return "Flying to: ";
    }
    return {
        transportTo: transportTo
    }
}

doSomeWork(new carTransportService(), 'Greece');
doSomeWork(new planeTransportService(), 'France');