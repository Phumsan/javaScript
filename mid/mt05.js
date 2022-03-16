function getBudgets(){
    num = 0 ;
    test = arguments[0];
    for(var i = 0 ; i < 3 ; i++){
        num += test[i].budget;
    }
    return num ;
}
console.log (getBudgets([
    { name: "John", age: 21, budget: 23000},
    { name: "Steve", age: 32, budget: 40000},
    { name: "Martin", age: 21, budget: 2700}
]))
console.log (getBudgets([
    { name: "John", age: 21, budget: 29000},
    { name: "Steve", age: 32, budget: 32000},
    { name: "Martin", age: 21, budget: 1600}
]))