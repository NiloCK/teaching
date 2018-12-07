/// <reference path="src/ace.js"/>

var editor = ace.edit("editor");

editor.setTheme("ace/theme/twilight");
// editor.setTheme("ace/theme/tomorrow_night");

var jsMode = ace.require("ace/mode/javascript").Mode;
editor.getSession().setMode(new jsMode());


$('#CommandLine').keyup(function(event){
  if (event.keyCode === 13){
    repl();
  }
});

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

let WorkSheet = {
  title: 'A title',
  text: 'This is the intro text (in markdown?)',
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


$('.ace_function').click(function(){
  eval(editor.getValue());
  result = eval($(this).text() + "();")
  print(result);
});

var calledMe = false;

function setInstructionText() {
  $('#Instructions')[0].textContent =
  WorkSheet.title + ': ' + WorkSheet.text;
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

setInstructionText();
for (let i=0;i<WorkSheet.questions.length; i++){
  let li = document.createElement('li');
  li.id = 'grade' + (i-1);
  
  $('#GradesList')[0].appendChild(li);
}