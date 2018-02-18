
function repeatStringNumTimes(str, num) {
	// repeat after me
 if(num>0){
    return str.repeat(num);
  }
  return "";
}

/*
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
*/

/*
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
*/

repeatStringNumTimes("abc", 3);
