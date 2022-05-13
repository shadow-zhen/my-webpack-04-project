const arr = ['Roya', 'Owen', 'Eric'];

const index = arr.findIndex((item) => item === 'Owen');

console.log(`Owen 排在第 ${index + 1} 順位`);

/* --- Class 語法糖 --- */
class Circle {}

/* --- Promise 物件 --- */
const promise = Promise.resolve();

console.log(Circle, promise);
