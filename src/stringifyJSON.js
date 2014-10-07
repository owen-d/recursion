// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'object' && obj !== null) {
    if (obj.length !== 0 && obj.length !== undefined) {
    var objKeys = Object.keys(obj);
    var result = [];
    for (var i = 0; i < objKeys.length; i++) {
      var keyString = '"' + objKeys[i] + '"';
      var objKeyValue = obj[objKeys[i]];
      if (typeof objKeyValue === 'string') {
        keyString = keyString + ': "' + objKeyValue + '"';
        result.push(keyString);
      }
      else {
        keyString = keyString + stringifyJSON(objKeyValue);
        result.push(keyString);
      }
    }
    return '{' + result.join(', ') + '}';
  }
  else {
    if (obj.length !== 0) {
    return typeof obj === 'string' ? '"' + obj + '"':
    '' + obj;
  }
    else {
      return typeof obj === 'object' ? '{}' : '[]';
    }
  }
  }
  else {
    return typeof obj === 'string' ? '"' + obj + '"':
    '' + obj;
  }

  

};
