function DuplicateNumbers(array= []){
let i , j, k ;
let size = array.length;
console.log(array.length);
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
    DuplicateNumbers([1,3,5,1,4,3])

