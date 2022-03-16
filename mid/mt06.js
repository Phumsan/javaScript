function removeDups(arr){
    j=0;
    ans = [];
    for(i=0;i<arr.length;i++){
        if(i == 0){
            ans.push(arr[i]);
        }
        else if(arr[i] == arr[j]){
            arr.pop();
        }
        else if(arr[i] != arr[j]){
            ans.push(arr[i]);
        }


    }
    return ans;
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));