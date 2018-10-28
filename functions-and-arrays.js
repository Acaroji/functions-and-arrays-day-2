// Find the maximum

function maxOfTwoNumbers(firstNumber, secondNumber){
  
  if(firstNumber > secondNumber){
      return firstNumber;
  }
}

// Finding Longest Word
var theWords = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];

function findLongestWord (words) {
  var i;
  var longestWord = theWords[0];
  for (i=0; i < theWords.length; i++){
       
    if(theWords[i].length > longestWord.length){
      longestWord = theWords[i]
      }
  }
 return longestWord;
} 
console.log("the longest word is",findLongestWord(theWords))

// Calculating a Sum

var numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray (numbers){
    var i;
    var mySum = 0;
    for (i=0; i < numbers.length; i++){
        mySum = numbers[i] + mySum
    }
    return mySum;
}
console.log("the sum is",sumArray(numbers))

// Calculate the Average

var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers (numbersSum){
    var i;
    var myArrey = 0;
    for( i=0; i < numbersSum.length; i++){
        myArrey = numbersSum[i]+ myArrey
    }
    return myArrey/numbers.length;
}
console.log("the average number is",averageNumbers(numbers))

// Array of Strings
var words = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];

function averageWordLength (wordsArray){

  var sumWords= 0;
  for( i=0; i< wordsArray.length; i++){
      sumWords = sumWords + wordsArray[i].length        
  }
  return sumWords/wordsArray.length;
}
console.log("the average word length",averageWordLength(words));

// Unique Arrays

var othersWords = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray (wordsArray){
    var newArray= [];
    for(var i=0; i < wordsArray.length; i++){

      console.log(newordsArray, newArray.indexOf([i]))
      if(newArray.indexOf(array[i])=== -1){

        newArray.push(array[i]);
        }
      }
      return newArray; 
    }

// Finding Elements
var wordsToFind = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

function doesWordExist(arrayTotalWords,wordToSearch){
  
for (i=0; i< arrayTotalWords.length; i++){
  if (wordToSearch === arrayTotalWords[i]){
      return true
    }
      }
  return false
}
console.log("the word matter",doesWordExist(wordsToFind,"matter"));



// Counting Repetion

var words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes (array, wordSearch){
  var wordsCount=0; 
  for (var i=0; i< array.length;i++){
    if (array[i] === wordSearch){

    wordsCount++;

    }
  }
  return wordsCount;
}
console.log("the word matter is repeated",howManyTimes(words, "matter"))