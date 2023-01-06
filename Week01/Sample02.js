const stringArray = [12, 13, 14, 15];

console.log(stringArray);
// To get Length
console.log('Array Length:', stringArray.length);
// To add at array
stringArray.push('056');
// add at first
stringArray.unshift('chumma');
console.log(stringArray);
// Remove from last
console.log(stringArray.pop());
// Remove from first
console.log(stringArray.shift());

for (let index = 0; index < stringArray.length; index += 1) {
  console.log(stringArray[index]);
}
