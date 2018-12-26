/// <reference path="lib/ace.js"/>

let WorkSheet = {
  instructions: 

  `## Title
*This* is the intro text (in markdown?)`,
  editorText: 
  `//////////////////////////////////////////////
  // Section One - Introduction to JavaScript //
  //////////////////////////////////////////////
  
  /*
  Text between the slash-star above and the star-slash below is ignored by
  the computer. Text that follows // on a line is also ignored by the computer.
  
  Text like this is used to communicate the intent and design goals of a
  piece of code and is called 'comments'.
  
  Comments are usually displayed in a muted colour.
  */
 
 /* Question 1:
 
 Computer programs are made of functions. Sometimes a user
 calls a function, and sometimes functions call each other.
 
 To call a function in Javascript, use the function's name
 followed by parenthesis. Type callMeMaybe() into the white
 input bar on the lower right of the page and hit 'enter' to
 call this function and complete question one.
 
 (That input on the lower right is called a command line.)
 */
function callMeMaybe(){
  calledMe = true;
  updateGrades();
  return "This is crazy!";
}

/* A few things happened there. updateGrades() was called, and
you've earned your first checkmark on the top right!

Also, note that "This is crazy!" was printed to the console,
and that this is what the function 'returned'. When you
enter a command on the command line, the thing that gets
returned from your command gets printed along with a '>>'.
*/

/* Question 2:

callMeMaybe() is a function that called for no arguments.
This means that you didn't have to pass anything into it -
it just worked on its own. Some functions need an input,
like the examples below. Try them in the console like this:

twoTimes(4)
halfOf(7)

And so on. Try them with whatever inputs you like.

twoMoreThan(x) and oneThirdOf(x) have not been completed.
Write these functions and make a call to updateGrades()
to see if they are correct!
*/
function twoTimes(x){
  print("Two times " + x + " is:");
  return 2 * x;
}
function halfOf(x){
  print("Half of " + x + " is");
  return x / 2;
}
function twoMoreThan(x){
  //YOUR CODE HERE
}
function oneThirdOf(x){
  //YOUR CODE HERE
}

/* The functions twoTimes(x) and halfOf(x) above each called
the print() function - this can be handy when trying to
figure out how some code is working. If your code is doing
something unexpected, try using the print() function to
find out where things get off track.

Javascript uses +, -, *, and / to do addition, subtraction,
multiplication, and division, respectively. You can do
combined operations as well, such as x + y * 2. Javascript
uses the same order of operations that you're familiar with
from math class, including parenthesis. x + y * 2 will be
different than (x + y) * 2.
*/

/* Question 3:

Functions can take any number of arguments - they just
need to be defined that way. The sum(a,b) function below
is an example.

Using the functions on the page as a reference, define a
new function called 'average' which takes two arguments
and returns their average. Remember that the average of
two numbers is their sum divided by two.
*/
function sum(a, b){
  print("The sum of " + a + " and " + b + " is:");
  return a + b;
}
// YOUR CODE HERE

/* Question 4:

Besides arithmetic, Javascript can also do comparisons
between values. Try calling biggerThanTen() with different
inputs. This is useful when a program needs to make
decisions. Try running biggest() with some different inputs
to get a feel for how the if/else and comparison syntax work.

When you get the hang of it, complete the function tooSmall,
which checks to see if the input 'a' is too small to be the
square root of 'x'. EG, tooSmall(3,16) should return true because
3 is smaller than the square root of 16. tooSmall(4,16) should
return false, because 4 is not smaller than the square root of 16.
*/
function biggerThanTen(x){
  return x > 10;
}
function biggest(a, b){
  if (a > b){
    print(a + " is bigger than " + b);
  } else {
    print(b + " is bigger than " + a);
  }
  
  if ( a + b > 5 ){
    print(a + " + " + b + " is bigger than five!");
  }
  
  return "There is a bug in this function. Can you make it say something silly?";
}
function tooSmall(a, x){
  // YOUR CODE HERE
}

/* Question 5:

Sometimes we want a function to repeat a series of steps
many times. To do this, we use a loop structure. One type of
loop structure is the while() loop, which repeats as long as
the condition it is evaluating is true. Read countdown(x) and
try to figure out what it does. Try calling it with some
different inputs.


*/
function countdown(x){
  if (biggerThanTen(x)){
    return "That's too much! I won't count it!";
  }
  
  while (x >= 0){
    print("X is now " + x);
    x = x - 1;
  }
  return "After the loop is finished, x is " + x + ".";
}

/* Question 6:

All of the functions we have used so far have worked
with input values to produce the output directly, but
sometimes it is useful to create variables to store
extra information. This is done with the var keyword.

Using the countdown() function as a guide, complete the
sumFromOneTo(x) function so that it adds all the numbers
from one to x. Eg, sumFromOneTo(4) should return 10,
since 1 + 2 + 3 + 4 = 10.
*/
function sumFromOneTo(x){
  if (biggerThanTen(x)){
    return "It's too much! I won't add it!";
  }
  var sum = 0;
  
  while(x > 0){
    // YOUR CODE HERE
  }
  
  return sum;
}

//////////////////////////////////////////////////
// Section Two - Writing a Square Root function //
//////////////////////////////////////////////////

/* Question 7 */
function upperBound(x){
  // YOUR CODE HERE
}

/* Question 8 */
function lowerBound(x){
  // YOUR CODE HERE
}

/* Question 9 */
function newGuess(lowBound, highBound){
  // YOUR CODE HERE
}

/* Question 10 */
function squareRoot(x){
  // YOUR CODE HERE
}`,
questions: [
  {
    text: 'asdf',
    tests: [
      
    ]
  },
  {
    text: 'hi',
    tests: []
  }
],
// for storing sheet-specific data / variables
// that are to be accessed by the questions
globals: {}
}

var editor = ace.edit("editor");

editor.setTheme("ace/theme/twilight");
// editor.setTheme("ace/theme/tomorrow_night");

var jsMode = ace.require("ace/mode/javascript").Mode;
editor.getSession().setMode(new jsMode());

setEditorText();
setInstructionText();
initProgressReport();


$('#CommandLine').keyup(function(event){
  if (event.keyCode === 13){
    repl();
  }
});

function setEditorText() {
  editor.setValue(WorkSheet.editorText);
  // deselects the 'pasted' text
  editor.moveCursorTo(0, 0);
}

function repl(){
  var input = $('#CommandLine').val();

  eval(editor.getValue());
  var output = eval(input);

  print(">> " + output);
  $('#CommandLine').val("");
}

function compile(){
  // squareRoot = undefined;
  // upperBound = undefined;
  // lowerBound = undefined;
  // guess = undefined;
  var userCode = editor.getValue();
  eval(userCode);
}

function print(text){
  console.log(text);
  $("#Output").append(text);
  $('#Output').append(document.createElement('br'));
}


$('.ace_function').click(function(){
  eval(editor.getValue());
  result = eval($(this).text() + "();")
  print(result);
});

var calledMe = false;

function setInstructionText() {
  // $('#Instructions')[0].textContent =
  // WorkSheet.title + ': ' + WorkSheet.text;
  
  $('#Instructions')[0].innerHTML = markdown.toHTML(
    WorkSheet.instructions
  );
}

function updateGrades(){
  var grades = [];
  
  for (var i=1; i<=10; i++){
    // u2713 - the checkmark
    grades.push(unitTests[i]() ? "\u2713" : "");
    $('#grade' + i).text(grades[i-1].toString());
  }
}

var unitTests = {
  cases: [ -5, -3, -1, 0, 5, 2342, 80000 ],
  1: function(){
    return calledMe;
  },
  2: function(){
    eval(editor.getValue());
    try{
      for(var i=0; i<this.cases.length; i++){
        if (twoMoreThan(this.cases[i]) != this.cases[i] + 2 ||
            oneThirdOf(this.cases[i]) != this.cases[i] / 3){
              return false;
            }
          }
      return true;
    } catch(e) {
      return false;
    }
  },
  3: function(){
    eval(editor.getValue());
    try{
      for(var i=0; i<this.cases.length; i++){
        for(var j=0; j<this.cases.length; j++){
          if ((this.cases[i] + this.cases[j]) / 2 != average(this.cases[i], this.cases[j]) ){
            return false;
          }
        }
      }
      return true;
    } catch (e) {
      return false;
    }
  },
  4: function(){
    eval(editor.getValue());
    try{
      return (tooSmall(3.75,16) &&
              tooSmall(4.99, 25) &&
              !tooSmall(5, 25) &&
              !tooSmall(10, 15) );
    }catch(e){
      return false;
    }
  },
  5: function(){
    return false;
  },
  6: function(){
    return false;
  },
  7: function(){
    var rootCases = [0, 0.5, 1, 20, 25, 1000];
    eval(editor.getValue());
    try{
      
    } catch (e) {
      return false;
    }
  },
  8: function(){
    var rootCases = [0, 0.5, 1, 20, 25, 1000];
    eval(editor.getValue());
    try{
      
    } catch (e) {
      return false;
    }
  },
  9: function(){
    var guessCases = [
      [0,1],
      [4,4.000005],
      [3,5],
      [8.23425,8.234255]
    ];
    eval(editor.getValue());
    try{
      for (var i=0; i<guessCases.length; i++){
        var guess = newGuess(guessCases[i][0], guessCases[i][1]);
        if (guess < guessCases[i][0] ||
          guess > guessCases[i][1] ){
            return false;
          }
      }
      return true;
    } catch (e) {
      return false;
    }
  },
  10: function(){
    var rootCases = [0, 0.5, 1, 20, 25, 1000];
    eval(editor.getValue());
    try{
      for (var i=0; i<rootCases.length; i++){
        if (Math.abs(Math.sqrt(rootCases[i]) - squareRoot(rootCases[i])) > 0.00001){
          return false;
        }
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}


function initProgressReport() {
  for (let i = 0; i < WorkSheet.questions.length; i++) {
    let li = document.createElement('li');
    li.id = 'grade' + (i - 1);
    $('#GradesList')[0].appendChild(li);
  }
}
