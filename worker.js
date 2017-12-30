var doWork = function(data) {
    console.log("I am working with " + data);
}

// module.exports.doWork = doWork;

module.exports = {
    doWork : doWork
};