// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
var result = [];


var classSeeker = function(element) {

  if (element.classList != undefined && element.classList.contains(className)) {
  		result.push(element);
  }
  if (element.hasChildNodes()) {
  		var childArray = Array.prototype.slice.apply(element.childNodes);
  		childArray.forEach(classSeeker);
  }
  ;
}

classSeeker(document.body);
return result;

};
