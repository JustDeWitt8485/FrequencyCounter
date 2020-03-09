

document.getElementById("countButton").onclick = function () {

    for (let i = 0; i < typedText.length; i++)



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
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);

        words = typedText.split(/\s/);
    }

}


texttype hello world
i  typetext[i]  lettercount(key)  lettercount(value)
0; h; h; 1
1; e; e; 1
2; l; l; 3
3; l;
4; o; o; 2
5; " "; ""; 1
6; w; w; 1
7; o;
8; r; r; 1
9; l;
10; d; d; 1
