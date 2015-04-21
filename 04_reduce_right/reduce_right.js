var reduceRight = function(args,parse,func){
  var output = "";
    for (var i=args.length; i>=0; i--){
      output += (func(args[i],args[i-1]));
      
      //console.log(output);
    }
  return output;
};


