let arr=[10,20,30,40]
console.log((typeof arr));

let arr1=new Array(["hello",100])
console.log(typeof arr1)


/*Array inbuilt functrions:
- push()
- pop()
-splice()
- slice()
*/

// splice() is used for insert, delete,replace



//slice() is used for copy the array elements
let price=[400,500,600,700]

let discountPrice=price.map((x)=>{
    return x+x/100*8;
})

console.log(discountPrice);


// 15 browser names and their respective java script engines
