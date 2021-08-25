export function encryptCaesar(inputString, key) {
  // 65-90 uppercase
  // 91-96 are brackets
  // 97-122 lowercase

  const handleBounds = (num, lower, upper) => {
    if (num > upper){ // push num toward A (overflow)
      return (num % upper) + lower;
    }
    // HANDLE DECRYPTION/NEGATIVE KEY
    else if ( num < lower ){ // push num toward Z (underflow)
      return upper - (lower - num)
    }
    else {
      return num;
    }
  }

  const convertLetter = (le, key) => {
    // First control block checks if it's an uppercase letter, elif handles lowercase
    if ( le.charCodeAt() >= 65 && le.charCodeAt() <= 90){
      return handleBounds(le.charCodeAt() + key, 64, 90)
    }
    else if ( le.charCodeAt() >= 97 && le.charCodeAt() <= 122 ){
      return handleBounds(le.charCodeAt() + key, 96, 122)
    }
    else {
      return le;
      // we have invalid input (not the alphabet)
      // throw err
    }
  }
  
  // convert string to array of lbers representing char code
  let charCodeArr = inputString
    .split('')
    .map(x => convertLetter(x, key));


  // add key to each char code
  // convert array of lbers into string
  return String.fromCharCode(...charCodeArr);
}
