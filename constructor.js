function User(name, lastname, age){
      this.name = name,
      this.lastname = lastname,
      this.age = age  
}
User.prototype.print = function(){
      console.log(`Name: ${this.name}, last name: ${this.lastname}, age: ${this.age}`);
};
const user = new User('John','Smith', 20);
user.print();