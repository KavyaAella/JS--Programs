function reverse(a=[] ){
    let index = a.length-1;

let first = 0;

for (let i = first; i < index; i++){

let temp = a[index];

a[index] = a[first];
a[first] = temp;

first += 1;
index -= 1;
}
return a
    }
    console.log(reverse([101,102,103,109,201,304,508]))
    
