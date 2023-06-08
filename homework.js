//Hamster 


class Hamster{
    constructor(owner, name, price){
    this.owner = owner;
    this.name = name;
    this.price = price;
    }

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
}

const hamster = new Hamster("john", "pine",15);
console.log(hamster);
hamster.wheelRun();
hamster.eatFood();


//person
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



// history 
const timmy = new Person("Tmmy"); 
console.log(timmy.getName());

for(let i=0; i<5; i++){
    timmy.eat(); 
}

for (let i=0; i<5; i++){
    timmy.exercise();
}

for(let i=0; i<5; i++){
    timmy.ageUp();
}

const gus = new hamster ("Timmy","Gus",15);
timmy.buyHamster(gus); 

for (let i = 0; i<2;i++){
    timmy.ageUp(); 
}

for(let i=0; i<2; i++){
    timmy.eat();
}
for(let i=0; i<1; i++){
    timmy.getWeight(); 
}


//cheff class

class chef{
    constructor(name){
    this.name =name;
    }
createDinner(appetizer,entree, dessert){
    return new Dinner(appetizer, entree, dessert);
}
}

//dinner class 
class Dinner{
    constructor(appetizer, entree, dessert){
        this.appetizer=appetizer; 
        this.entree=entree;
        this.dessert=dessert; 
    }
}

const Chef = new Chef("Luca");

//dinner crations 
const dinnerOne = chef.createDinner("salad","soup","chocolate flan");
const dinnerTwo = chef.creatDinner("bread","pie","carrot cake");
const dinnerThree= chef.creatDinner("dumplings","noodles","mochi")

console.log();



