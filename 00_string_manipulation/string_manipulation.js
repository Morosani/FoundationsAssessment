  var vowelsCount = function(str){
  var vowels = ["a","e","i","o","u"];
  var lower = str.toLowerCase();
  var iterArray = lower.split("");
  var counter = 0;
  var isAVowel = function(ltr){
    for (var n = 0; n < 5; n++){
      if (ltr === vowels[n]){
        return true;
      }
    }
    return false;
  };
  
  for (var i = 0; i < iterArray.length; i++){
    if (isAVowel(iterArray[i]) === true) {
     counter = counter + 1;
    }
  }
  return counter;
};