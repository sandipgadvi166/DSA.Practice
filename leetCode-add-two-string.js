


/**
 * this problem is to add two given string and you should not use and inbuild 
 * method or conver string to integer using predefined method
 *
 * */


const addString = (num1, num2) => {

  let pointer1 = num1.length - 1;
  let pointer2 = num2.length - 1;

  let carry = 0;
  let result = "";

  while (pointer1 >= 0 || pointer2 >= 0 || carry){
    let digit = pointer1 >= 0 ? num1[pointer1] - '0' : 0;
    let digit2 = pointer2 >= 0 ? num2[pointer2] - '0' : 0;

    let sum = digit + digit2 + carry;

    result = (sum % 10) + result;

    carry = Math.floor(sum / 10);
    pointer1--;
    pointer2--;
  }
  
  return result;
}

console.log("Adition is:-",addString('155','36'));
