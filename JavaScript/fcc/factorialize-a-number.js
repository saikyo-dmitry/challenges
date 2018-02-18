function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);

/*
function factorialize(num) {
  for (n = 1;num >= 1; num--) {
	n = num * n;
  }
  return n;
}

factorialize(5);
*/