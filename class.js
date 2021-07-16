class User {
      constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      }
      print() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
      }
}

class Admin extends User{
      constructor(...args){
            super(...args);
            this.role = 'admin';
      }
}

const admin = new Admin('John', 'Connor', '32');
admin.print();