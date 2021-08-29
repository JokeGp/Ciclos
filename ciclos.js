function factorial(n){
let r = 1;
for(let i = n; i>0; i--){
    r *= i;
}
  return r;
}

function euler(quantity){
  if (quantity > 1){
        let sum = 1
        for(let i = 1; i < quantity; i++){
            sum += 1 / factorial(i)
        }
        return sum
  }
}

function infinite(quantity){
  
  let sum = 4
  let res = 0;
  
        for(let i = 3; i <= quantity; i+=4){
            res += -(4 / i);
              console.log(i);
        }
  
        for(let i = 5; i <= quantity; i+=4){
            sum += (4/i);
      }
        return sum + res;

}
  
  console.log(euler(7));
  console.log(infinite(9));
