//Hamster 

class Hamster{
    constructor(owner, name, price){
    this.owner = owner;
    this.name = name;
    this.price = price;
};

wheelRun() {
console.log("squeak squeak");
console.log("squeak squeak");
}

eatFood(){
    console.log("nibble nibble");
}
getPrice(){
    return price; 
}

const hamster = new Hamster("john", "pine",15);
console.log(hamster);
hamster.wheelRun();
hamster.eatFood();
}

class Person{
    constructor(name){
    this.name = name; 
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
}

 getName(){
    return name
 }
 getAge(){
    return age;
 }
 getWeight(){
    return weight;
 }
 greet(){
    console.log('Hello ${name}');
 }
 eat(){
    this.weight +=1; 
 }
 exercise(){
    this.weight -=1; 
 }
ageUp(){
    this.age +=1;
    this.height+=1; 
    this.weight+=1;
    this.mood -=1;
    this.bankAccount +=10;
}

buyHamster(hamster){
    this.hamsters.push(hamster);
    this.mood +=10;
    this.bankAccount -= hamster.getPrice();

}
}

