// 7.	 PALINDROME –A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward
// Write a program that checks whether a word or a phrase is a palindrome or not.
// Examples of a palindromes
// (race car)



const Checkpalindrome = (M) => {
    //change to string
    //Reverse the string
    //check if the reversed string is equal to the original string

    return M.toString() === M.toString().split("").reverse().join("") ? true : false;

}

console.log(Checkpalindrome('race car'))