function highestDigit(n){
    if(n == 0){ return 0;}
    else{
      var remainder = n % 10
      return Math.max(remainder, highestDigit((n-remainder)*1e-1));
    }
  }
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));