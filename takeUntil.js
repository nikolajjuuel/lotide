const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function (array, callBack) {
    // ...callback should only be provided one value
    const newData = [];
    for (let i = 0; i < array.length; i++) {
        let callBackReturn = callBack(array[i]);
        if (callBackReturn === true) {
            break;
        } else {
            newData.push(array[i]);

        }
    }
    console.log(newData);
    return newData;
}


const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');
