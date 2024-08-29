// Instructions
// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

// 2. Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// 3. Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be: “The movie is good, I like it”

// 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.


// 1. Create a variable called sentence
let sentence = "The movie is not that bad, I like it";

// 2. Find the first appearance of "not" in the sentence
let wordNot = sentence.indexOf("not");

// 3. Find the first appearance of "bad" in the sentence
let wordBad = sentence.indexOf("bad");

// 4. Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Replace "not...bad" with "good"
    sentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
}

// 5. Console.log the final result
console.log(sentence); // Output: "The movie is good, I like it"
