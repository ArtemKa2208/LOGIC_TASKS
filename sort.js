let array = [14,20,57,74,83,121,131];
function isArraySort(array){
      let currentValues = array[0]
      for(let i = 1; i < array.length; i++){
            if(currentValues < array[i]){
                  currentValues = array[i];
            }else{
                  return false;
            }
      }
      return true;
}

console.log(isArraySort(array));