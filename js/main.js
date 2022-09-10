let salaries ={
    "Akmal":1200,
    "Salim":5200,
    "Karima":1800
};
function sumSalaries(salaries){
    let sum = 0
    for (let value of Object.values(salaries)) {
        sum+=value;
        
    }alert(`Summa = ${sum}`)
}
sumSalaries(salaries);