function CoffeeMake(){}

CoffeeMake.prototype.on = function(){
    console.log('Coffee machine ON')
}
CoffeeMake.prototype.off = function(){
    console.log('Coffee machine OFF')
}


function DripCoffeeMaker(filterCoffee){
    this.filterCoffee = filterCoffee;
}

DripCoffeeMaker.prototype = CoffeeMake.prototype;

DripCoffeeMaker.prototype.filter = function(){
    console.log('Your filter is', this.filterCoffee)
}

const dripCoffee = new DripCoffeeMaker('reusable');

dripCoffee.on();
dripCoffee.off();
dripCoffee.filter();


function CarobCoffeeMaker(coffee,cups){
    this.coffee = coffee;
    this.cups = cups;
}

CarobCoffeeMaker.prototype = CoffeeMake.prototype;

CarobCoffeeMaker.prototype.carob = function(){
    console.log(`Your choice is ${this.cups} cup/cups of ${this.coffee}`);
}

const carobCoffee = new CarobCoffeeMaker('espresso','2');
console.log('-----------------------------------')
carobCoffee.on();
carobCoffee.off();
carobCoffee.carob();


function AutomaticCoffeeMaker(temperature, strength){
    this.temperature = temperature;
    this.strength = strength;
}

AutomaticCoffeeMaker.prototype = CoffeeMake.prototype;

AutomaticCoffeeMaker.prototype.drink = function(){
    console.log(`Water temperature of your ${this.strength} coffee is ${this.temperature}`)
}

const automaticCoffee = new AutomaticCoffeeMaker(94,'concentrated');
console.log('-----------------------------------')
automaticCoffee.on();
automaticCoffee.off();
automaticCoffee.drink();