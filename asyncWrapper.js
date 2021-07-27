async function wrapper(func){
      const start = performance.now();
      await func();
      const end = performance.now()
      console.log(end - start);
}

async function example(){
      let n = 0;
      for(let i = 0; i < 1000; i++){
            n += i; 
      }
      console.log(n);
}

console.log(wrapper(example))