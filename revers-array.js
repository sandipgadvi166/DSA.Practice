const resversArray = (...a) => {
  let flat = [];
  for (let item of a) {
    if (Array.isArray(item)) {
      flat = flat.concat(resversArray(...item));
      console.log("oops i found aray in ..", flat);
    } else {
      flat.push(item);
    }
  }
  return flat.sort((a, b) => a - b);
};

function rv(r) {
  let v = [];
  for (i = r.length - 1; i >= 0; i--) {
    v.push(r[i]);
  }
  return v;
}

const r = resversArray(1, [1, 2], [2, 3]);

console.log(rv(r));

arr = [1, 2, 3, 4, 5, 5];
function removeDuplicateArry(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }

  return res;
}

const s = removeDuplicateArry(arr);

console.log(s);
// the time complxity : o(n2) space o(n)

function optimiseRemoveDuplicate(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  const arr2 = new Set();

  for (const num of arr) {
    if (!arr2.has(num)) {
      arr2.add(num);
    }
  }

  return arr2;
}

const arrResult = optimiseRemoveDuplicate(arr);
console.log(arrResult);
// o(n) o(1)

function sortb(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortb([8, 4, 3, 1]));

function fionci() {
  // 0 1 1 2 3 5 8
  fib = [0, 1];
  arr = 5;
  for (let i = 2; i < arr; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log("fib", fionci());

function palendromNumber(str) {
  let strr = str.toString();
  for (let i = 0; i < strr.length / 2; i++) {
    if (strr[i] !== strr[strr.length - 1 - i]) {
      return "not a palendrom";
    }
  }
  return true;
}
console.log("palendrom", palendromNumber(131));
