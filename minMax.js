let array = [-7,8,12,10,1,3,-8];

function getMinMax(array){
      let min = array[0];
      let max = array[0];
      for(let i = 1; i < array.length; i++){
            if(min > array[i]) min = array[i];
            if(max < array[i]) max = array[i];
      }
      return [min,max];
}

let [min,max] = getMinMax(array);
console.log(min);
console.log(max);