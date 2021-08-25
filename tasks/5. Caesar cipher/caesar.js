// to decrypt simply enter key as negative on encryptCaesar()

export function encryptCaesar(inputString, key) {
  // 65-90 uppercase
  // 91-96 are brackets
  // 97-122 lowercase

  // helper fn
  // 96, 96, 122
  const handleBounds = (num, lower, upper) => {
    if (num > upper){ // push num toward A (overflow)
      return (num % upper) + lower;
    }
    // HANDLE DECRYPTION/NEGATIVE KEY
    else if ( num <= lower ){ // push num toward Z (underflow)
      return upper - (lower - num)
    }
    else {
      return num;
    }
  }
  
  // helper fn
  const convertLetter = (le, key) => {
    // First control block checks if it's an uppercase letter, 
    // else if handles lowercase
    if ( le.charCodeAt() >= 65 && le.charCodeAt() <= 90){
      return handleBounds(le.charCodeAt() + key, 64, 90)
    }
    else if ( le.charCodeAt() >= 97 && le.charCodeAt() <= 122 ){
      return handleBounds(le.charCodeAt() + key, 96, 122)
    }
    else {
      return le;
      // we have invalid input (not the alphabet), return as is
    }
  }
  
  let charCodeArr = inputString
    .split('')
    .map(x => convertLetter(x, key));


  return String.fromCharCode(...charCodeArr);
}


// Second bonus
export function bruteDecrypt(inputString) {
  // There are only 25 combinations to look through
  // We can reduce these results by
  // a) Requiring vowels
  // b) Devalue j, k, q, x, z
  let allAnswers = [];
  
  for( let i = -1; i >= -25; i--){
    allAnswers.push(encryptCaesar(inputString, i));
  }

  // a) Vowels are at least 30% of the phrase
  const minVowels = Math.ceil(inputString.length * 0.3);
  const validateVowels = (str) => {
    let numVowels = 0
    for(let i = 0; i<str.length; i++){
      if (/[aeiouAEIOU]/.test(str[i]))
        numVowels++;
    }
    return numVowels >= minVowels;
  }

  // b) j k q x z are less than 1% of the phrase
  const maxUncommonChars = Math.floor(inputString.length * 0.1)
  const removeUncommon = (str) => {
    let numUncommon = 0;
    for(let i = 0; i<str.length; i++){
      if (/[jkqxzJKQXZ]/.test(str[i]))
        numUncommon++;
    }
    return numUncommon <= maxUncommonChars;
  }

  let prunedAnswer = allAnswers.filter(x => validateVowels(x)).filter(y => removeUncommon(y));

  return prunedAnswer[0];
}