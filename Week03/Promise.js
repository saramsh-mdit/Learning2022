
const SamipLove = (name) => {
    return new Promise((resolve,reject) => {
        if (name === "ghimire") {
            resolve("samip loves ghimire");
        }
        else {
            reject("I have a girlfriend.")
        }
    })
}

let love;
console.log(love);
// SamipLove("ghimire")
//     .then((data) => {
//         console.log(data);
//         love = true;
//     console.log("go on a date");
// })
//     .catch((e) => {
//         console.log(e);
//         love = false;
//     })

// console.log(love);


SamipLove('pandey')
  .then((data) => {
    console.log(data);
    love = true;
    console.log('go on a date');
  })
  .catch((e) => {
    console.log(e);
    love = false;
  });

console.log(love);
