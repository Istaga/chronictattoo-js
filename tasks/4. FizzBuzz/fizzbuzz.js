export function getFizzBuzzUntil(n) {
  let fizzbuzzy = new Array(n+1);

  for(let i = 1; i<n+1; i++){
    let s = "";
    fizzbuzzy[i - 1] = i;
    if ( i % 3 == 0 ){
      s += "Fizz";
    }
    if ( i % 5 == 0){
      s += "Buzz"
    }
    if ( s ){
      fizzbuzzy[i - 1] = s;
    }
  }

  return fizzbuzzy;
}
