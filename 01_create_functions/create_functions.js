

var createFunctions = function(arg){
  var arrayOfFunctions = [];
  var newFunc = function(num){
    var returnedFunc = function(){
        return num;
    };
    return returnedFunc;
  };
  
  for (var i = 0; i < arg; i++){
    arrayOfFunctions.push(newFunc(i));
  }
  return arrayOfFunctions;
};