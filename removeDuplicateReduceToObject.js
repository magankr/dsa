const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = Object.keys(arr.reduce((obj, item) => {
  obj[item] = true;
  return obj;
}, {})).map(Number);

console.log(uniqueArr); // [1, 2, 3, 4, 5]