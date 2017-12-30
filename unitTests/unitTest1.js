var appModule = require('./appModule');
var chai = require('chai');

chai.should();

describe("add function", function(){
    describe("core functionality", function(){ 
        it("should return sum of two parameters", function(){
            var actual = appModule.add(3,5);
            
            actual.should.equal(8);
        });

        it("shouldnot return anything but the sum of two parameters", function() {
            var actual = appModule.add(3,5);

            actual.should.not.equal(10);
        })
    });
});

describe("doSomethingVerySlow", function(){
    it('should return "done" when it is completed', function(completed){
        appModule.doSomethingVerySlow(function(result){
            result.should.equal('done');
            completed();
        })
    })
})