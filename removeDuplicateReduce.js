const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = arr.reduce((acc, item) => {
  if (!acc.includes(item)) acc.push(item);
  return acc;
}, []);

console.log(uniqueArr); // [1, 2, 3, 4, 5]