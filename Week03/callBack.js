function add(a, b, c) {
  return a + b + c;
}

function generateNumber(callback) {
  setTimeout(() => {
    let a = (Math.random() * 1000) % 1000;
    let b = (Math.random() * 1000) % 1000;
    let c = (Math.random() * 1000) % 1000;

    let result = callback(a, b, c);
    return parseInt(result);
  }, 0);
}

let greaterRandom = generateNumber(add);

console.log(greaterRandom);
