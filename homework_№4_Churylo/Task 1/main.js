class Worker{
    constructor(firstname,secondname,rate,days){
        this.name = firstname;
        this.surname = secondname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return 'Salary = ' + this.rate * this.days;
    }
}

let worker = new Worker('Ivan', 'Ivanov', 20, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

console.log('---------------------------------')

let employee = new Worker('Petro', 'Petriv', 50, 20);

console.log(employee.name);
console.log(employee.surname);
console.log(employee.rate);
console.log(employee.days);
console.log(employee.getSalary());