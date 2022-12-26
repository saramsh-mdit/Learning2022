function add(a, b) {
  return a + b;
}

function isOdd(a) {
  if (a % 2 == 0) return false;
  else return true;
}

const isOddA = (a) => {
  if (a % 2 == 0) return false;
  else return true;
};

//  ==
//  ===
//  0 === 0 true
//  0 == "0" true
//  0 === "0" false
//  {} === {} false
