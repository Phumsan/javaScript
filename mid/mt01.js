function NumberSpilt(num){
    if(num % 2 == 0) {
        return[num/2 , num/2]
    
      }else{ 
          return[Math.floor (num/2 ), Math.floor (num/2+1)]
      }
    
    }
    
    console.log( NumberSpilt(4));
    console.log( NumberSpilt(10));
    console.log( NumberSpilt(11));
    console.log( NumberSpilt(-9));