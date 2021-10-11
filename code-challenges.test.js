// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    it("that takes in a string and returns a coded message", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

const codedMessage = (string) => {
    // Create a function called codedMessage  that takes in a string as a parameter 
    finalString = ''
    // Create an empty string to contain the new string since .replace does not alter the original string
    for(let i=0; i < string.length; i++){
        // Iterate through the string with a for loop
        finalString = string.replace(/([aA])/g, "4").replace(/([eE])/g, '3').replace(/([iI])/g, '1').replace(/[oO]/g, '0')
        }
        // Use the .replace method with regex to replace each vowel with the corresponding number. Perform a global replacement to replace all instances of the vowel.
        return finalString
    }




// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


describe("particularLetter", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        expect(particularLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(particularLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.
var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"

const particularLetter = (array, letter) => {
    // Create a function called particularLetter with an array and a single letter as parameters
    return array.filter(function(filterLetter) { 
        // Use .filter higher order function to filter through the array
        return filterLetter.toLowerCase().indexOf(letter.toLowerCase()) !== -1
        // Create a new function called filterLetter that compares the lowercase array letter at each index with the input letter parameter. If the value is found the function will return the string in the output
    }) 
}
    




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    it("function that takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse([5, 5, 5, 3, 3])).toEqual(true)
        expect(fullHouse([5, 5, 3, 3, 4])).toEqual(false)
        expect(fullHouse([5, 5, 5, 5, 4])).toEqual(false)
    })
})

// b) Create the function that makes the test pass.


const fullHouse = (array) => {
    // Create a function called fullHouse that takes in an array as a parameter
    let houseArray=[]
    // Create an empty array to push the iterated return to
    const counts = {};
    // Create an object called counts to show what the count is for each index
    for (const num of array) {
      counts[num] = counts[num] ? counts[num] + 1 : 1
    } // Create a loop with for...of to iterate over the array to compare counts with a ternary operator
    for(const key in counts){
        // Us for...in to count the number of instances for each value in the object
        houseArray.push(counts[key])
        // push the key and the counts for each value to the empty houseArray
    }
    for(let i=0;i<houseArray.length;i++){
      if(houseArray[i]===3)return true
      // Use for loop to iterate through the houseArray, if one value is only returned three times, return true
    }return false
    // else return false
}
