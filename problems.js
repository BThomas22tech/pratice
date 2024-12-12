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

// console.log(checkDuplicate("apple","apple"))
// console.log(checkDuplicate("apple","pear"))
// console.log(checkDuplicate(" apple","a pple "))
// console.log(checkDuplicate(" apple","a   pple "))



// Sliding Window

function maxSubarraySum(arr,num){
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return null
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i ++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
} 
// console.log(maxSubarraySum([2,6,6,4,5,8,6,],3))

function pyramid(){

    for (let line = "#"; line.length < 8; line+= "#"){
        console.log(line)
    }

    // for ( var i = 1; i <= num; i++){
    //     let num = ""
    // for (var j = 1; j <= i; j++ ){
    //     num += "# "
    // }
    // console.log(num)
    // }
}
pyramid(6)

function chess(num){
    board = ""
    for (var i = 0; i < num; i++){
        if (i % 2 != 0){
            board += " "
        }
        for (var j = 1; j< num-1; j++){
            if (j % 2 != 0){
                board+="#"
            }
            if (j % 2 === 0){
                board += " "
            }
        }
        board+="#\n"
    }
    return board
}
// Alternative way to solvelet size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
// Sum x and y to check even and odd
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

console.log(chess(8))