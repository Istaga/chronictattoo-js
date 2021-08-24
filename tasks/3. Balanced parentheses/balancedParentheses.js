export function areParenthesesBalanced(inputString) {
  let stack = [];
  let arrayString = inputString.split("");
  

  function opposite(charA, charB){
    if ( (charA == '(' && charB == ')') | (charB == '(' && charA == ')') ){
      return true;
    }
    if ( (charA == '[' && charB == ']') | (charB == '[' && charA == ']') ){
      return true;
    }
    if ( (charA == '{' && charB == '}') | (charB == '{' && charA == '}') ){
      return true;
    }
    return false;
  }
        
  function isOpening(char){
    return ( char == '(' | char == '[' | char == '{' ) ? true : false;
  }

  function isClosing(char){
    return ( char == ')' | char == ']' | char == '}' ) ? true : false;
  }

  for( let i = 0; i < arrayString.length; i++ ){
    let curChar = arrayString[i];
    if ( isOpening(curChar) ){
      stack.push(curChar)
    }
    else if ( isClosing(curChar) ){
      if ( stack.length == 0 ){
        return false;
      }
      if ( opposite(curChar, stack[stack.length-1]) ){
        stack.pop();
      }
      else {
        return false;
      }
    }
  }
        
  return (stack.length == 0);
}