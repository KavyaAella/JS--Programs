//solution to find  Missing num only for one
function getMissingNumber( numbers=[], totalCount) 
{ 
     let expectedSum = totalCount * ((totalCount +1) / 2); 
     let actualSum = 0;
     let i;

     for ( i=0;i<numbers.length;i++ ) { 
         actualSum += numbers[i];
         //console.log(expectedSum);
    //console.log(actualSum);
     }
      return expectedSum - actualSum;
    }
    
    console.log(getMissingNumber([1,2,4,5,6,7,8,],8))

    // solution to find missing numbers in ARRAy
    
    function printMissingNumbers ( number = [], count){
        let missingCounts=count - number.length;
        let  countAllMissing=0;
        let i;
        for( i=1;i<count;i++){
        
        if(number[i-1-countAllMissing] != i){
        console.log("missing number " + i);
        countAllMissing++;
                      
        }
    }
}
    
console.log(printMissingNumbers([1,2,4,5,7,8,9,10,12],12));