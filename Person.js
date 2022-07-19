class Person {
    constructor(name, age, address, city, region) {
        this.name = name ;
        this.age = age;
        this.address = address;
        this.city = city, 
        this.region = region;
    }

    greeting() {
        console.log(`Congratulations, ${this.name}`)
    }
}

module.exports = Person;