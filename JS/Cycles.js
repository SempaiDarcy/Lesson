//Метки для цикла

// let a = [1,2,3,7]
// let b = [1,2]
//
// label:for (let i = 0; i<a.length; i++) {
//     for (let j = 0; j<b.length; j++){
//         if (a[i]<b[j]){
//             console.log(a[i])
//             break label
//         }
//     }
// }
// const foo = () => {
//     let count = 0
//     return ()=>{
//         console.log(count++)
//     }
// }
// let a = foo()
// a()

// const arr = [
//     {
//         name: 'Pavel',
//         city: {
//             nameOfCity: 'Minsk'
//         }
//     }];
//
// // let arr1 = [...arr,{...arr,city: {...arr,nameOfCity: 'Piter'}}]
// let arr1 = arr.map(el=>({...el,city: {...el.city,nameOfCity: 'Piter'}}))
// console.log(arr)
// console.log(arr1)

// function minMinMax(array) {
//     // let min = +[...array].sort((a, b) => a - b).splice(0,1);
//     // let max = +[...array].sort((a, b) => b - a).splice(0,1);
//     let min = Math.min(...array)
//     let max = Math.max(...array)
//     let num = [];
//     for(let i = min+1; i <max; i++){
//         num.push(i);
//     }
//     let middle =  +num.filter(el => ![...array].includes(el)).splice(0, 1);
//     return [min, middle, max];
// }
//
// console.log(minMinMax([0, 2, 4, 5]));

//Хитрый цикл
const arr = [1,2,3];
for (i=1;i<arr.length;arr[i++]=1){
    console.log(i)
}
console.log(arr)//Что выведет консоль?

