/*
//first solution
function destroyer(arr) {
  // Remove all the values
  //console.log(arguments[0],arguments[1]);
  var args = Array.prototype.slice.call(arguments);
  //var args = [].slice.call(arguments);
  //console.log(args);
  var targets = args.slice(1);
  //console.log(targets);
  var newArr = args[0].filter(word => targets.includes(word) === false);
  return newArr;
  //console.log(newArr);
}
*/

/*
//improved - less code
function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments);
  var targets = args.slice(1);
  var newArr = args[0].filter(word => targets.includes(word) === false);
  return newArr;
  //console.log(newArr);
}
*/
/*
//example solution
function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
*/


//my two lines solution after seeing the example solution
function destroyer(arr) {
  // Remove all the values
  var targets = Array.from(arguments).slice(1);
  return arr.filter(word => !targets.includes(word));
  //console.log(newArr);
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
