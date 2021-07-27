function closure(){
      let concat = '';
      return function(string){
            if(string === undefined) return concat;
            concat += string;
      }
}
let concat = closure();
concat('test string 1');
concat('test2');
concat('finish');
console.log(concat());
