var add = function(a, b) {
    return a + b;
}

var doSomethingVerySlow = function(){
    setTimeout(function() {
        callback("done");
    }, 5000);
}

module.exports.add = add;
module.exports.doSomethingVerySlow = doSomethingVerySlow;