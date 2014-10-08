// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === undefined || typeof obj === 'function') {
    return;
  }
  else if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      }
      else {
        //non empty array stuff
        var result = [];
        for (var i = 0; i < obj.length; i++) {
          var arrString;
          if (typeof obj[i] === 'string') {
            result.push('"' + obj[i] + '"');
          }
          else {
            result.push(stringifyJSON(obj[i]));
          }
        }
      return '[' + result.join(',') + ']'; 
      }
    }
    else if (obj.length === 0) {
      return '{}';
    }
    else {
      //non empty object stuff
      var objKeys = Object.keys(obj);
    var result = [];
    for (var i = 0; i < objKeys.length; i++) {
      var keyString = '"' + objKeys[i] + '":';
      var objKeyValue = obj[objKeys[i]];
      if (typeof objKeyValue === 'string') {
        keyString = keyString + '"' + objKeyValue + '"';
        result.push(keyString);
      }
      else { 
        if (objKeyValue === undefined || typeof objKeyValue === 'function') {
          keyString = "";
        }
        else {
          keyString = keyString + stringifyJSON(objKeyValue);
        }
        result.push(keyString);
      }
    }
    var trimmedResult = result.filter(function(x){
      return x !== "";
    });
    return '{' + trimmedResult.join(',') + '}';
    }
  }
  else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  else {
    return ""+obj;
  }
};
