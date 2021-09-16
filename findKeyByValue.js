const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`🤑🤑🤑 Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🤯🔥🔥  Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  
function findKeyByValue(obj, value){
	for(const key in obj){
 // 	console.log(`key:`,key);
 //   console.log('value:', obj[key]);
   	if(value === obj[key]){
    	console.log(key);
      return key;
    }
  
  }
	//console.log(obj);
  //console.log(value);

}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);