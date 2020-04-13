function RemoveDuplicates(array= []){
    let i , j, k ;
    let size = array.length;
     console.log(size);
        for( i=0;i<size;i++){
    
        for( j=i+1;j<size;j++){
        
        if(array[i]==array[j]){
        for( k=j; k<size; k++)
        {
        array[k] = array[k + 1];
        }
        size--;
        j--;
        }
                }
        }
        console.log(size);
        for( i=0; i<size; i++)
        {
        console.log(""+ array[i]);
        }
    }
    console.log(RemoveDuplicates([5, 6, 7,9,3,5,2,7,8,9,7,1,4,]))
