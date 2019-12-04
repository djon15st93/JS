// var - старое не используется
// let - обычная переменная
// const - статичная переменная

// Primitive Data Types
// number
// string
// boolean - true false
// null пусто
// underfined - не определен
// object обьект
// symbol уникальный не изменненый индетификатор

let bestGreetings = 'Hello';
alert(bestGreetings);
bestGreetings = 'JavaScript';
alert(bestGreetings);
//Logical operators
// > < >= <= != == === || &&



const age = Number(prompt('Enter your age'));
alert('Your age is: ' + age);
if (age >= 18) {
    alert('You are adult!');
}
    else{
        alert('You are underaged');
    }
const nextAge = addOne(age);
alert('Next year you will be: ' + nextAge);


function addOne (num) {
    const incremented = num + 1;
    return incremented;

}