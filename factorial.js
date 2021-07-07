function getFactorial(n){
      if(n < 0) return 'The number must not be negative';
      if(n === 0) return 1;
      return n * getFactorial(n-1);
}
console.log(getFactorial(9));