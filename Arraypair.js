function pairSum(a = [] , sum) {

   let i=0;
    let j=0;
    let temp=a[0];
    for( i=0,j<(a.length-1);i<j;)
    {
       temp= a[i]+a[j];
       if(temp==sum)
       {
         console.log(a[i]+" , "+ a[j]);
        }
        else if(temp<sum)
        {
         i++;
         }
         else 
         {
            j--;
        }
        return a;
    }
   
    
    }
    pairSum([1,2,3,4,5,6,7,8,9,0],9);
