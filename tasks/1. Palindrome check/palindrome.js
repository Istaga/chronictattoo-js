export function isPalindrome(inputString) {
  if(inputString === ''){
    return false;
  }
  while(inputString.length > 0){
    let lhs = inputString[0];
    let rhs = inputString[inputString.length - 1];
    if(lhs !== rhs && inputString.length > 1) return false;
    inputString = inputString.slice(1, inputString.length - 1);
  }
  return true
}