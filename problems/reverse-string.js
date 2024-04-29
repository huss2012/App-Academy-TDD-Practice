module.exports = function reverseString(string) {
  // Your code here
  if (typeof string === "string") {
    return string.split("").reverse().join("");
  } else {
    throw new TypeError("Invalid argument! Must be a string");
  }
};

//-----------Local test area-----------
//console.log(reverseString(10))
