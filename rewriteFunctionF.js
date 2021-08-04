async function wait() {
      return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
      })
  }
  
async function f() {
      try {
            const a = await wait();
            console.log(a);
      } catch (error) {
            console.log(error)
      }
      console.log('Promise complete');
  }
  f()