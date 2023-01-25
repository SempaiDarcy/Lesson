function pow(a,b) {
    if (b==1){
        return a;//базовый шаг рекурсии
    }
    else {
        return a*pow(a,b-1)//шаг рекурсии
    }
}

console.log(pow(3,2))