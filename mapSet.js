const arr = [{id: 1},{id: 2},{id: 3}, {id: 1}];

function removeDuplicates(arr){
      let map = new Map();
      let newArr = [];
      for(let i = 0; i < arr.length; i++){
            if(!map.has(`id_${arr[i].id}`)){
                  map.set(`id_${arr[i].id}`,arr[i]);
                  newArr.push(map.get(`id_${arr[i].id}`));
            }
           
      }
      return newArr;
}

console.log(removeDuplicates(arr));