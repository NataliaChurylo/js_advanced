class MyString{
    reserve(str){
        return str.split('').reverse().join('');
    }
    usFirst(str){
        return str.charAt(0).toUpperCase() + str.substring(1);
    }
    usWords(str){
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    }
}

let str = new MyString();

console.log(str.reserve('IVAN'));
console.log(str.usFirst('natalia'));
console.log(str.usWords('arsenal arsenal arsenal'));