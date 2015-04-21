//Hey guys - this is working in REPL. Not sure what I'm doing wrong....

var message = "";
var counter = 1;

var otherFunc = function(){
    message += "hey";
};


var alternate = function(inputFunc){

    var returnFunc = function(){
        if (counter % 2 === 0){
        inputFunc();
        }
    };
    returnFunc();
    counter ++;
    return returnFunc;
};