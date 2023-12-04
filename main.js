function calEven (num) {
  if (num % 2 === 0) {
    return `${num}  is an even number`;
  } else {
    return `${num}  is not an even number`;
  };
}
console.log (calEven (6));
 
// Question two
 
function nameTwo (n1, n2) {
    for (let n = n1; n<=n2; n++)
     {
        console.log(n);
   }
}
nameTwo (4, 16);
 
 
 
function add (start, end) {
    let sum = 0;  
    // declaration. initalization is automatic
    // = is an assignment operator. 0 is the value assigned
    for (let i = start; i <= end; i++) {
        sum += i;
       
    }
    return sum;
}
let result = add (5, 20);
console.log (result);