document.getElementById("countButton").onclick = function() {  
    // your code will go here ...  
}

const typedText = document.getElementById("textInput").value;

typedText = typedText.toLowerCase();  
// This changes all the letter to lower case.  
typedText = typedText.replace(/[^a-z'\s]+/g, "");  
// This gets rid of all the characters except letters, spaces, and apostrophes.  
// We will learn more about how to use the replace function in an upcoming lesson.

for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    // do something for each letter.
const letterCounts = {};


if (letterCounts[currentLetter] === undefined) {
    letterCounts[currentLetter] = 1;  
} else {  
    letterCounts[currentLetter]++;  
}

}