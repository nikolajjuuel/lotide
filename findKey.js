const exp = require("constants");

function findKey(obj, value) {
  for (const key in obj) {
    let callBack = value(obj[key]);

    if (callBack === true) {
      return key;
    }
  }
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2));

module.exports = findKey;
