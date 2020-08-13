# Javascript Quiz Game

This is a simple web project that makes use of Bootstrap, DOM Manipulation with Javascript and plain Javascript to create a quiz featuring Javascript-centered questions. The purpose of this project was to give me practice as a Frontend Web Developer.

## Getting Started

Simply download these project and open 'index.html' with any browser, but for optimal results use Google Chrome. 

### Prerequisites

Internet connection, as this uses CDNs for libraries and fonts.


### Installing

```
Unzip
```

## Running the tests

Run the following lines in the interactive debugger for every page whenever issues are present

```
console.log("pageNum: " + pageNum)
console.log("questions: " + questions)
console.log("correct answer: " + questions[pageNum].options[questions[pageNum].correctNum])
```

### Architecture

SPA (Single Page Architecture)

I have 4 buttons that when clicked, they call code that controls the logic of the game. At the end of the game some HTML elemenets are removed to display new information to the user.

## Built With

* [Bootstrap](http://getbootstrap.com/2.3.2/) - CSS library that makes styling easier
* [jQuery](https://jquery.com/) - Only for Bootstrap, not for DOM manipulation.
* [Google Fonts](https://fonts.google.com/specimen/Do+Hyeon?selection.family=Do+Hyeon) - Free fonts that don't need to be installed locally for the web browser to display them.

## Altering

You may alter the project anyway you want. I recommend you alter the ```questions``` object to whatever set of questions you want. I included a class prototype for the ```questions``` object as a block comment to allow anyone to understand how the object works.


## Author

* **Ray Garcia** - *Everything* - [PurpleBooth](https://github.com/RayGar)

## License

This project is licensed under the MIT License.

## Acknowledgments

* Where I learned to use DOM manipulation with plain Javascript to make HTML elements [A Beautiful Site](https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript)
* Inspiration - the third entry in this article inspired me to make the project: [Medium](https://medium.com/@GarrettLevine/5-projects-to-complete-when-starting-to-learn-front-end-web-development-48e8a1ce3178)

## Live Demo

[Here](https://s3.amazonaws.com/javascript-quiz-game/index.html)