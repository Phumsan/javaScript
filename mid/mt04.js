function totalVolume() {
    let total = 0
    for(let i = 0; i< arguments.length;i++){
         numstart = 1
         for (let j = 0;j < arguments[i].length;j++){
            numstart = numstart * arguments[i][j] 
         }
         total += numstart
        }
 return (total);
}

console.log(totalVolume ([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume ([2, 2, 2], [ 2, 1, 1]));
console.log(totalVolume ([1, 1, 1]));