function a(b) {
    return b*2
}
console.log(a(5))
//чистая функция это когда функция принимает один аргумент и выводит один результат, сколько бы мы раз не вызывали ее результат будет один и тот же, меньше багов за счет того, что все создается внутри,
// чистая функция не гадит нашей системе

const COST_OF_ITEM = 200;
const totalPrice = quantity => COST_OF_ITEM * quantity;

console.log(totalPrice(2)); // 500
console.log(totalPrice(2)); // 500