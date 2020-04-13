function largestAndSmallest(numbers =[]){
    let largest = numbers[0];
    let smallest = numbers[0];
    let i ;
    for(i = 1; i < numbers.length; i++) 
    {
      if(numbers[i]>largest)
      {
          largest=numbers[i];
         }
    else if(numbers[i]<smallest)
    {
    smallest=numbers[i];
    }
    }
    console.log('Largest:' +largest);
    console.log('Smallest:'+smallest);
}
largestAndSmallest([1,5,6,7,24,12,0,34])
