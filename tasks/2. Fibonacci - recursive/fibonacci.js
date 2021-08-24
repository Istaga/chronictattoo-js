export function getFibonacciUntil(n) {
  if ( n <= 0 ){ // empty array for bad input
    return []
  }
  else if ( n == 1 ){
    return [0]
  }
  else if ( n == 2 ){
    return getFibonacciUntil(n-1).concat([1]);
  }
  else if ( n > 2 ){
    let previousVals = getFibonacciUntil(n-1);
    let newValue = previousVals[previousVals.length-1] + previousVals[previousVals.length-2];
    return previousVals.concat([newValue]);
  }
}
