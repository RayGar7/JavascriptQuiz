//script.js to be used on an html page
console.log("script.js connected");

//every question is an object, containing one question, one answer and the index of the question.
var questions = [
	/*,
	{
		question: "",
		options: [
			"",
			"",
			"",
			""
		],
		correctNum: ,
		explanation: ""
	},*/
	{
		question: "Which of the following is true about variable naming conventions in JavaScript?",
		options: [
			"JavaScript variable names must begin with a letter or the underscore character.",
			"JavaScript variable names are case sensitive.",
			"Both of the above.",
			"None of the above." 
		],
		correctAnswer: "Both of the above.",
		correctNum: 2,
		explanation: "Explanation: Both of the above options are correct."
	},
	{
		question: "Which of the following type of variable is visible everywhere in your JavaScript code?",
		options: [
			"global variable",
			"local variable",
			"Both of the above.",
			"None of the above."
		],
		correctAnswer: "global variable",
		correctNum: 0,
		explanation: "Explanation: Global Variables: A global variable has global scope which means it is visible everywhere in your JavaScript code."
	},
	{
		question: "Which of the following is correct about callbacks?",
		options: [
			"A callback is a plain JavaScript function passed to some method as an argument or option.",
			"Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.",
			"Both of the above.",
			"None of the above."
		],
		correctAnswer: "Both of the above.",
		correctNum: 2,
		explanation: "Explanation: A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered."
	},
	{
		question: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
		options: [
			"toExponential()",
			"toFixed()",
			"toPrecision()",
			"toLocaleString()"
		],
		correctAnswer: "toFixed()",
		correctNum: 1,
		explanation: "Explanation: toFixed() − Formats a number with a specific number of digits to the right of the decimal."
	},
	{
		question: "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
		options: [
			"toSource()",
			"valueOf()",
			"toString()",
			"None of the above."
		],
		correctAnswer: "toString()",
		correctNum: 2,
		explanation: "Explanation: toString() − Returns a string of either 'true' or 'false' depending upon the value of the object."
	},
	{
		question: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
		options: [
			"slice()",
			"split()",
			"substr()",
			"substring()"
		],
		correctNum: 2,
		explanation: "Explanation: substring() − Returns the characters in a string between two indexes into the string."
	},
	{
		question: "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
		options: [
			"toLocaleLowerCase()",
			"toLowerCase()",
			"toString()",
			"substring()"
		],
		correctNum: 0,
		explanation: "Explanation: toLocaleLowerCase() − Returns the calling string value converted to lower case while respecting the current locale."
	},
	{
		question: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
		options: [
			"sup()",
			"small()",
			"strike()",
			"sub()"
		],
		correctNum: 0,
		explanation: "Explanation: sub() − Causes a string to be displayed as a subscript, as if it were in a <sub> tag."
	},
	{
		question: "Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?",
		options: [
			"concat()",
			"every()",
			"push()",
			"some()"
		],
		correctNum: 1,
		explanation: "Explanation: every() − Returns true if every element in this array satisfies the provided testing function."
	},
	{
		question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
		options: [
			"reverse()",
			"shift()",
			"slice()",
			"some()"
		],
		correctNum: 2,
		explanation: "Explanation: slice() − Extracts a section of an array and returns a new array."
	}

];

//initialize the game with the first question
var questionNum = document.getElementById("question-number");
var questionLabel = 1;
questionNum.textContent = questionLabel;
var questionText = document.getElementById("question");
questionText.textContent = questions[0].question;
var explanation = document.getElementById("explanation");
var choiceButtons = document.querySelectorAll(".choice");
var score = 0;
var pageNum = 0;

setPage(pageNum);

//set 4 event listeners on 4 buttons (assuming 4 buttons always)
for(i=0;i<4;i++) {
	choiceButtons[i].addEventListener("click", function(){
		var isCorrect = this.textContent === questions[pageNum].options[questions[pageNum].correctNum]		
		scoreProcessor(isCorrect);

		if(pageNum+1<questions.length) {
			//"move on" to the next page, ie. increment pageNum
			setPage(++pageNum);
		} else {
			console.log("game over\n");
			console.log("Final score: " + score + " points out of " + (pageNum+1));
			//remove everything or rewrite the entire HTML page in order to display the score
			removeElement("game");	//removes the question number, question, choices, and explanation
			//add html elements for displaying the final score
			//innerHTML of the win page
			var html = "<h1 id='game-over'>GAME OVER</h1>" + "<p class='final-score'>Final score: <span class='nums'>" + score + 
			"</span> points out of <span class='nums'>" + (questions.length) + "</span></p>"
			addWinPage("myContainer", "div", "winPage", html);
		}

	});
}


function setPage(n) {
	//change the text content of the question and number of the first question, call this a separate function, set page
	questionText.textContent = questions[n].question;
	questionNum.textContent = n+1;
	if(n >= 1){
		explanation.textContent = "" + n + ":" + questions[n-1].explanation;
	}
	for(i=0;i<questions[n].options.length;i++) {
		//console.log("choiceButtons[" + i + "].textContent: " + choiceButtons[i].textContent + "\n");
		//console.log("questions[" + i + "].options[" + i + "]: " + questions[n].options[i] + "\n"); 
		choiceButtons[i].textContent = questions[n].options[i];
	}
}

function scoreProcessor(isTrue) {
	if(isTrue) {
		console.log("correct");
		score++;
	} else {
		console.log("incorrect");
	}
}

function removeElement(elId) {
    // Removes an element from the document
    var element = document.getElementById(elId);
    element.parentNode.removeChild(element);
}

function addWinPage(parentId, elementTag, elementId, html) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
}

