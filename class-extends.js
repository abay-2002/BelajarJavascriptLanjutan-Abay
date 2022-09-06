class Person {
    constructor(_name, _age){
        this.name = _name,
        this.age = _age
    }

    describe(){
        return `Hello my name ${this.name} i am ${this.age} years old.`
    }
}

class Programmer extends Person {
    constructor(_name, _age, _years_of_experience){
        // What super does is just taking constructor from the parent Class.
        super(_name, _age);

        // Costum behaviour
        this.years_of_experience = _years_of_experience
    }

    coding(){
        return `${this.name} is coding..`
    }
}

const person_1 = new Person('Abay', 16);
console.log(person_1.describe())

const programmer_1 = new Programmer('Angkasa', 19, 3);
console.log(programmer_1.coding());