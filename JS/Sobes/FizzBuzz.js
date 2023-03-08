//Есть 100 чисел
//выводим их на экран
// если число делится на 3 выводим fizz
// если делится на 5 слова buzz
// если на 3  и на 5 то fizzbuzz

// 1 вариант
// function a1() {
//     for(let i = 1; i<=100;i++){
//         let a = 0
//         if (i%3===0 && i%5===0){
//             console.log('FizzBuzz')
//         } else if(i%3===0){
//             console.log('Fizz')
//         }
//         else if(i%5===0){
//             console.log('Buzz')
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
//2 вариант
function isFizz(n) {
    if(n%3===0){
        return true
    }
    return false
}
function isBuzz(n) {
    if(n%5===0){
        return true
    }
    return false
}

function isFizzBuzz(n) {
    if(n%3===0 && n%5===0){
        return true
    }
    return false
}

for (let i=1;i<100;i++){
    switch (true){
        case isFizzBuzz(i):
            console.log('FizzBuzz');
            break;
        case isFizz(i):
            console.log('Fizz');
            break;
        case isBuzz(i):
            console.log('Buzz')
            break;
        default:
            console.log(i)
    }
}
// варианты что выше императивные

// декларативный вариант

const gen = (n,w) =>(num)=>num%n===0?w:''
const fizz = gen(3,'Fizz');
const buzz = gen(5,'Buzz');

[...Array(99).keys()].map(el=>el+1).forEach(i=>console.log(fizz(i) + buzz(i) || i))
