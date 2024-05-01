function myMap(inputArray, callback) {
  // Your code here
  let resArray = [];

  for (let i = 0; i < inputArray.length; i++){
    const ele = inputArray[i];
    const passedEleToCb = callback(ele);

    resArray.push(passedEleToCb);
  }
  return resArray;
}

module.exports = myMap;
