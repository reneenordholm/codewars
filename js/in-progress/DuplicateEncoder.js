// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is 

// "(" if that character appears only once in the original string, or 
// ")" if that character appears more than once in the original string. 

// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let array = word.split('')

    let string = array.filter(letter => letter == array ).length

    console.log(string)
}

// Tests
duplicateEncode("din")
// duplicateEncode("recede")
// duplicateEncode("Success")
// duplicateEncode("(( @")