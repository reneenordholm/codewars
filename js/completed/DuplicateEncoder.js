// Adding text to test github functionality

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
    // split string into array and lowercase each letter 
    let array = word.toLowerCase().split('')
    
    // iterate through each letter
    // compare starting index of letter wtih last index of letter
    // if indices are the same there are no duplicate letters return "("
    // if indices are not the same there are duplicates return ")"
    let result = array.map(letter => 
        array.indexOf(letter) == array.lastIndexOf(letter) ? "(" : ")"
    )

    // return result array as string 
    return result.join('')
}

// Tests
// duplicateEncode("din")
// duplicateEncode("recede")
// duplicateEncode("Success")
duplicateEncode("(( @")