
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  // Return string after the amount chopped off.
  return arr.slice(howMany);

}

/*
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}
*/

slasher([1, 2, 3], 2);
