# The goal of this exercise is to convert a string to a new string 
# where each character in the new string is 

# "(" if that character appears only once in the original string, or 
# ")" if that character appears more than once in the original string. 

# Ignore capitalization when determining if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 

def duplicate_encode(word)
    # convert all letters to lowercase
    # split word into individual letters and save to array instance variable
    array = word.downcase.split('')
    
    # map through array
    # if letter is in array less than or equal to one time assign it "(", else assign ")"
    # save map to string instance variable
    string = array.map { |letter| array.count(letter) <= 1 ? "(" : ")" }

    # join mapped array and return as string
    string.join
end

# Tests
# duplicate_encode("din")
# duplicate_encode("recede")
# duplicate_encode("Success")
# duplicate_encode("(( @")