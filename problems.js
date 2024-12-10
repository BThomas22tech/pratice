// Frequency Counter

// function validAnagram(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false
//     }
//     //create a way to save strings
//     const lookup = {}
//     for (let i = 0; i < string1.length; i++) {
//         let letter = string1[i]
//         // if letter exists, increment, otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1

//     }

//     for (let i = 0; i < string2.length; i++) {
//         let letter = string2[i]
//         // cant find letter or letter is zero then it's not an anagram
//         if (!lookup[letter]) {
//             return false
//         } else {
//             lookup[letter] -= 1
//         }
//         return true
//     }
// }

//     console.log(validAnagram("cat", "tac"))
//     console.log(validAnagram("cat", "tact"))
//     console.log(validAnagram('anagram','nagaram'))

//1. Can you restate the problem in your own words?
// 2. What are the inputs that go into the problem?
//3. What are the outputs that should come from the solution to the problem?
//4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
// 5. How should I label the important pieces of data that are part of the problem?


// Write a Function that takes two numbers and returns their sum.
// Create a function that adds two numbers together.
// function sum(number1,number2){
//     // inputs that go into the problem are numbers.
//     total = number1 + number2
//     return total
// }
// console.log(sum(1,2))
// the outputs should be the sum of both numbers combined.
// labels should be number1,number2, and a total


// check for duplicates

function checkDuplicate(string1,string2){

    let s1 = string1.replace(/\s+/g, "")
    let s2 = string2.replace(/\s+/g, "")
    console.log(s2,s1)
        if (s1 === s2){
            return true
        }
        else{
            return false
        }
}

console.log(checkDuplicate("apple","apple"))
console.log(checkDuplicate("apple","pear"))
console.log(checkDuplicate(" apple","a pple "))
console.log(checkDuplicate(" apple","a   pple "))