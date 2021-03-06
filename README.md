# GitLab Pages
https://tdse2020.gitlab.io/assessment-frequency-counter 




 /* texttype;         hello;               world;
i;  typetext[i];  lettercount(key);  lettercount(value)
0; h;             h;                 1
1; e;             e;                 1
2; l;             l;                 3
3; l;
4; o;             o;                 2
5; " ";           " ";               1
6; w;             w;                 1
7; o;
8; r;             r;                 1
9; l;
10; d;            d;                 1*/

1) I traced this to get the logic of what I needed to do 
2) I enclosed the contents inside the function
3) I created a words variable
4) Created a wordsCounts constant
5) Created a for loop for my words
6) Appended it to the HTML
7) also changed typedText from a constant to let, because of a syntax error on my web page.






# Assessment: Frequency Counter
In any written text, some letters will be used more often than others. Similarly, some words will be used more often than others. You are going to create a web page to count how frequently different letters and words are used in a block of text.

# Getting Started
Create a new directory for this project. Create an index.html file, and a corresponding .js file.

Next, you need a way to let the user enter some text. The following snippet of HTML defines a text area and a button:

<textarea rows="15" cols="60" id="textInput"></textarea>
<br />  
<button id="countButton">Count Frequencies</button>
At this point, let's also add two divs that you can use later for presenting the results:

<div id="lettersDiv"></div>
<div id="wordsDiv"></div>
The button you added earlier doesn't actually do anything yet; you need to attach a click handler to it using javascript:

document.getElementById("countButton").onclick = function() {  
    // your code will go here ...  
}
You also need a way to find out what was typed into the text field:

const typedText = document.getElementById("textInput").value;
Lastly, you need a way to ignore capitalization and punctuation. In a sentence like "Dogs enjoy sniffing other dogs!" you want both occurrences of the word "dogs" to be counted the same, even though one is capitalized and one isn't. Likewise, you don't care that one has an exclamation point and the other doesn't.

typedText = typedText.toLowerCase();  
// This changes all the letter to lower case.  
typedText = typedText.replace(/[^a-z'\s]+/g, "");  
// This gets rid of all the characters except letters, spaces, and apostrophes.  
// We will learn more about how to use the replace function in an upcoming lesson.
Counting letters and words
You can index into strings just like you can index into arrays. The expression typedText[4] will give you the 5th character of typedText. That means you can write a loop over all the characters in typedText like this:

for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    // do something for each letter.
}

You will use the idea of objects (a form of "associative array"), introduced in the last lesson, to keep counts of the number of times each different letter is used in the text.

const letterCounts = {};
When encountering a letter for the first time, you will initialize the corresponding count to 1. Otherwise, you will add one to the count.

if (letterCounts[currentLetter] === undefined) {
    letterCounts[currentLetter] = 1;  
} else {  
    letterCounts[currentLetter]++;  
}
To output how many times each letter occurred, you can use a for..in loop over letterCounts.

for (let letter in letterCounts) {  
    const span = document.createElement("span");  
    const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");  
    span.appendChild(textContent);  
    document.getElementById("lettersDiv").appendChild(span);  
}
You'll find that the letters aren't sorted in any useful order. That's fine for now, you can improve it later.

To produce the same kind of frequency count for words, you need a way to break the input string up into words by splitting it on the spaces. Conveniently enough, there's a built-in function that can help with that:

words = typedText.split(/\s/);

Given that, see if you can figure out how to adapt the letter-counting logic given above to apply to counting words.

# Bonus
There are lots of opportunities to improve on the baseline solution to make it look more polished.

Try to arrange the output more neatly.
Try to output the letters and words in order from most common to least common.
Try to illustrate the relative frequencies with a histogram chart.

# Submission
Push your code into your GitLab repository and deploy it via GitLab pages.
Once you have the GitLab Pages url (ex: https://username.gitlab.io/frequency-counter/), go back to your code to create a README.md file, and put the GitLab Pages url and your thought process/development plan as the contents.
Push your code to your GitLab repo once more.
In Canvas, please submit your Gitlab Repo url.
In GitLab, add KA_Grading as a member on your project with "Reporter" permission.