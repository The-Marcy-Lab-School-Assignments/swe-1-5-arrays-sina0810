const addToFrontOrBack = (arr, value, isFront) => {
 
};

const reverseString = (string) => {
let wordSpl = string.split("")
let reversedWordSpl = wordSpl.reverse()
let newArray = wordSpl.join("")

return newArray;
};


const newArrayFullOf = (value, number) => {
let array = new Array(number)
array.fill(value)
return array
};

const insertIntoMiddle = (arr, value) => {
  const middleArr = arr.length
  const middleArr2 = Math.floor(middleArr / 2)
  arr.splice(middleArr2, 0, value)

};

const deleteFromMiddle = (arr) => {
  const middleArr = arr.length
  const middleArr2 = Math.floor(middleArr / 2)
  arr.splice(middleArr2, 1)

};

const isRightIndex = () => {
};

const roundAllNumsDown = (arr) => {
const newNum = arr.map( num => Math.floor(num))
return newNum
};

const getAllYCoordinates = (arrOfCoords) => {
  const newArr = arrOfCoords.map((num) => num[1])
  return newArr;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
