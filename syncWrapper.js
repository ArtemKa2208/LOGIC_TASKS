function wrapper(func){
      const start = performance.now();
      func();
      const end = performance.now()
      return end - start;
}

function example(){
      let n = 0;
      for(let i = 0; i < 1000; i++){
            n += i; 
      }
      console.log(n);
}

console.log(wrapper(example));