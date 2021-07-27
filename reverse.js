function getReverse(string){
      let reverseString = '';
      if(typeof string === 'number') return 'You must enter the string';
      for(let i = string.length-1; i >= 0; i--){
            reverseString += string[i];
      }
      return reverseString;
}
console.log(getReverse('123456789'));
