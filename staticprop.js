class User {
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`Username: ${this.username}`);
  }
  static createId(){
    return `123`
  }
}

const kushal = new User("Kushal")
console.log(kushal.createId())

class Teacher extends User {
console.log(kushal.createId())

class Teacher extends User {
  constructor(username, email){
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone", "i@phonne.com")
console.log(iphone.locreateIdMe());


}