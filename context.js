const obj = {
      a: 5,
      b: 6,
}
function calc(){
      return this.a + this.b;
}
console.log(calc.call(obj));
