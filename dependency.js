///
var downloadResource = function(url) {
    // send http request and return data from server
}
// /// /// / / // / 



function getAnimal(getResourceMethod, animalName) {
    ///
    // 

    // 

    var d = getResourceMethod('http://www.animaldatabase.com/query?animal_name=' + animalName);
    //

    //
     //


    //
    return d;
}


$('#button').click(function (){
    getAnimal(downloadResource, inputValue);
})

//////////////////////////////////////////////////////////////////////////////

var downloadResourceMock(url) {
    if (url === 'http://www.animaldatabase.com/query?animal_name=cat') {
        
    }
    else {
        alert("Error, wrong url called");
    }
}


var test1 = function() {
    getAnimal(downloadResourceMock, "cat");
}

var test2 = function() {

}

a = [1,2,3]

applyToArray(f, a) {
    for (i = 0;i < a.length; i++){
        a[i] = f(a[i]);
    }
}

var square = function(x) {
    return x * x;
}

var cube = function(x) {
    return x * x * x;
}


applytoArray(square, a);



if (input == cube) {
    applyToArray(cube, a);
}
else if (input == square){
    applyToArray(cube, a);    
}





var testAll = function() {
    test1();
    test2();
    test3();
}



