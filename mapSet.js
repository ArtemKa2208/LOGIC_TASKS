const arr = [{id: 1},{id: 2},{id: 3}, {id: 1}];

function removeDuplicates(arr){
      let map = new Map();
      let newArr = [];
      for(let i = 0; i < arr.length; i++){
            map.set(`id_${arr[i].id}`,arr[i]);
      }
      for(let values of map.values()){
            newArr.push(values);
      }
      return newArr;
}

console.log(removeDuplicates(arr));