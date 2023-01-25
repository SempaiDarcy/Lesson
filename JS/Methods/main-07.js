//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// function a1 (str,num,sim) {
//         let result = ''
//         for (let i = 0; i<num;i++){
//                 result += str + sim
//         }
//         return result.slice(0,-1)
// }
// // document.querySelector('button').onclick = a1();
// console.log(a1("yo", 3, " "))
// console.log(a1("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// function a2(str,prestr) {
//         return str.toLowerCase().slice(0,prestr.length) === prestr
// }
//
// // console.log(0==false)
// // console.log(1==true)
// // console.log(null==undefined)
// // console.log(null>=0)
// console.log(a2("Incubator", "inc"))
// console.log(a2("Incubator", "yo"))
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
// function a3 (str,number) {
//         return str.slice(0,number) + '...'
// }
//
// console.log(a3('Всем студентам инкубатора желаю удачи!', 10))
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи") => "Всем"
// getMinLengthWord("") => null
// getMinLengthWord(123) => null
function  a4(str){
    let findLittle = str.replace('!', '').split(' ').map(el => el.length).sort((a, b) => a -b)[0];
    if(findLittle === 0){
        return null;
    }
    return str.split(' ').map(el => el.length == findLittle? el: '' ).join('');
}

console.log(a4("Всем студентам инкубатора желаю удачи"))
//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"
// function a5(str){
//         return str.split(' ').map(el=>el[0].toUpperCase() + el.slice(1).toLowerCase()).join(' ')
// }
// // !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!
// console.log(a5("всем стУдентам инкуБатора Желаю удачИ"))
//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке
// function a6(str,prestr){
//         let result = ''
//         for (let i=0;i<str.length;i++){
//
//         }
// }
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false





  




