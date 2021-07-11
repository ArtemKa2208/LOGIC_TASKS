const arr = [{id: 1},{id: 2},{id: 3}, {id: 1}];

function removeDuplicates(arr){
      let map = new Map();
      for(let i = 0; i < arr.length; i++){
            map.set(`id_${arr[i].id}`,arr[i]);
      }
      return map;
}

console.log(removeDuplicates(arr));