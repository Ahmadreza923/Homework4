var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
];

var satartQuiz = document.querySelector("#startQuiz");
var pageOne = document.querySelector(".pageOne");
var paragraph = document.createElement("p");
var paragraph2 = document.createElement("p");
var Time = document.querySelector("#timer");
var header = document.createElement("header");
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");
var submit = document.createElement("button");
var goBack = document.createElement("button");
var clearScore = document.createElement("button");
var i=0;
var timer=75;
var highScores = localStorage.getItem("highScores");
var bestPlayer = localStorage.getItem("bestPlayer");
var myAnswer="";
var myTimer;

function start() {
  myTimer= setInterval(countDown, 1000);
  askQuestion();
  getAnswer();
}

function askQuestion(){
  pageOne.textContent="";
  Time.textContent="The rest of your time is: "+timer;
  pageOne.append(paragraph);
  paragraph.textContent=questions[i].title;
  choice1.textContent=questions[i].choices[0];
  pageOne.append(choice1);
  choice2.textContent=questions[i].choices[1];
  pageOne.append(choice2);
  choice3.textContent=questions[i].choices[2];
  pageOne.append(choice3);
  choice4.textContent=questions[i].choices[3];
  pageOne.append(choice4);
  var hr=document.createElement("hr");
  pageOne.append(hr);
  pageOne.append(paragraph2);
  // paragraph2.textContent="";
  rightAnswer= questions[i].answer;
}

function getAnswer(){
    choice1.addEventListener("click", function(event) {
    event.preventDefault();
    myAnswer= questions[i].choices[0];
    i++;
    checkAnswer();
  })

  choice2.addEventListener("click", function(event) {
    event.preventDefault();
    myAnswer= questions[i].choices[1];
    i++;
    checkAnswer();
  })

  choice3.addEventListener("click", function(event) {
    event.preventDefault();
    myAnswer= questions[i].choices[2];
    i++;
    checkAnswer();
  })

  choice4.addEventListener("click", function(event) {
    event.preventDefault();
    myAnswer= questions[i].choices[3];
    i++;
    checkAnswer();
  })
}


function countDown(){
  timer=timer-1;
  Time.textContent="The rest of your time is: "+timer;
}

function checkAnswer(){
  if(myAnswer!==rightAnswer){
    timer=timer-15;
    paragraph2.textContent="Wrong";
  }else{
    paragraph2.textContent="Correct";
  }
  console.log(timer);
  console.log(i);
  console.log(myAnswer);
  if(i<questions.length & timer>0){
    askQuestion();
  } else{
    clearTimeout(myTimer);
    saveAnswer();
  }
}

function saveAnswer(){
  if(timer<0){
    timer=0;
  }
  pageOne.textContent="";
  Time.textContent="";
  pageOne.append(header);
  header.textContent="All Done!";
  pageOne.append(paragraph);
  paragraph.textContent="Your final score is: "+timer;
  pageOne.append(paragraph2);
  paragraph2.textContent="Enter your name: ";
  var input= document.createElement("input");
  pageOne.append(input);
  pageOne.append(submit);
  submit.textContent="Submit";
  submit.addEventListener("click", function(event) {
  event.preventDefault();
    
    if (timer> highScores){
      highScores=timer;
      bestPlayer=input.value;
    }
    localStorage.setItem("highScores", highScores);
    localStorage.setItem("bestPlayer", bestPlayer);
    console.log(highScores);
    console.log(bestPlayer);
    pageOne.textContent="";
    pageOne.append(header);
    pageOne.append(input);
    pageOne.append(goBack);
    pageOne.append(clearScore);
    header.textContent="High Score:";
    input.value= bestPlayer+" "+highScores;
    goBack.textContent="Go Back";
    clearScore.textContent="Clear highscores";
    goBack.addEventListener("click", function(event) {
      event.preventDefault();
      reset();
      location.reload();
    })
    clearScore.addEventListener("click", function(event) {
      event.preventDefault();
      bestPlayer=0;
      highScores="";
      localStorage.setItem("highScores", highScores);
      localStorage.setItem("bestPlayer", bestPlayer);
      reset();
      location.reload();

    })

  })
}


function reset(){
  i=0;
  timer=75;
  countDown();
}

satartQuiz.addEventListener("click",start);






// timer=75;
// for (i=0;i<questions.length;i++){
//   // pageOne.textContent="";
//   pageOne.textContent=questions[i].title;
//   choice1.textContent=questions[i].choices[0];
//   pageOne.append(choice1);
//   choice2.textContent=questions[i].choices[1];
//   pageOne.append(choice2);
//   choice3.textContent=questions[i].choices[2];
//   pageOne.append(choice3);
//   choice4.textContent=questions[i].choices[3];
//   pageOne.append(choice4);
//   rightAnswer= questions[i].answer;
//   getAnswer();  
//   console.log(myAnswer);
// }