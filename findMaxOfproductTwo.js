
let arr = [1,2,3,4,5,6];

function findMaxProduct(arr){
   
  let max = arr[0];

  let result = 0;

  for(let i=0; i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
    result = arr[i] * arr[j];
    if(result > max){
      max = result;
    }
    }
  }
  
  console.log(max);
}

findMaxProduct(arr);
