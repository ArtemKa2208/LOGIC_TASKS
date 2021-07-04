let array = [14,20,5,7,83,12,11];
function getMean(array){
      let mean = 0;
      for(let i = 0; i < array.length; i++){
            mean += array[i] / array.length;
      }
      return mean;
}
console.log(getMean(array));