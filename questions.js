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
      title: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
      choices: ["last()", "put()", "add()", "push()"],
      answer: "push()"
    },
    {
      title: "To insert a JavaScript into an HTML page, which tag is used?",
      choices: ["<script=’java’>", "<javascript>", "<js>", "<script>"],
      answer: "<script>"
    },
    {
      title: "Which of the following is correct to write “Hello World” on the web page?",
      choices: ["document.write(“Hello World”)", "print(“Hello World”)", "System.out.println(“Hello World”)", "response.write(“Hello World”)"],
      answer: ""
    },
];
var satartQuiz = document.querySelector("#startQuiz");
var pageOne = document.querySelector(".pageOne");
var Time = document.querySelector("#timer");
var Highscore = document.querySelector("#highscore");
var paragraph = document.createElement("p");
var paragraph2 = document.createElement("p");
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
  var uList1=document.createElement("ul");
  var uList2=document.createElement("ul");
  var uList3=document.createElement("ul");
  var uList4=document.createElement("ul");

  choice1.textContent=questions[i].choices[0];
  choice1.setAttribute("class","btn btn-primary");
  pageOne.append(uList1);
  uList1.append(choice1)
  
  choice2.textContent=questions[i].choices[1];
  choice2.setAttribute("class","btn btn-primary");
  pageOne.append(uList2);
  uList2.append(choice2)

  choice3.textContent=questions[i].choices[2];
  choice3.setAttribute("class","btn btn-primary");
  pageOne.append(uList3);
  uList3.append(choice3)

  choice4.textContent=questions[i].choices[3];
  choice4.setAttribute("class","btn btn-primary");
  pageOne.append(uList4);
  uList4 .append(choice4)

  var hr=document.createElement("hr");
  pageOne.append(hr);
  pageOne.append(paragraph2);
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
  // console.log(timer);
  // console.log(i);
  // console.log(myAnswer);
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
  pageOne.append(header);
  Time.textContent="The rest of your time is: "+timer;
  Highscore.textContent="High Score: "+bestPlayer+" "+ highScores;
  header.textContent="All Done!";
  pageOne.append(paragraph);
  paragraph.textContent="Your final score is: "+timer;
  pageOne.append(paragraph2);
  paragraph2.textContent="Enter your name: ";
  var input= document.createElement("input");
  var uList8=document.createElement("ul");

  pageOne.append(input);
  pageOne.append(uList8);
  pageOne.append(submit);
  submit.textContent="Submit";
  submit.setAttribute("class","btn btn-primary");
  submit.addEventListener("click", function(event) {
  event.preventDefault();
    
    if (timer> highScores){
      highScores=timer;
      bestPlayer=input.value;
    }
    localStorage.setItem("highScores", highScores);
    localStorage.setItem("bestPlayer", bestPlayer);
    pageOne.textContent="";

    var uList5=document.createElement("ul");
    var uList6=document.createElement("ul");
    var uList7=document.createElement("ul");
    pageOne.append(header);
    pageOne.append(input);
    pageOne.append(uList7);
    pageOne.append(uList5);
    uList5.append(goBack);
    pageOne.append(uList6);
    uList6.append(clearScore);
    header.textContent="High Score:";
    input.value= bestPlayer+" "+highScores;
    goBack.textContent="Go Back";
    goBack.setAttribute("class","btn btn-primary");
    clearScore.textContent="Clear highscores";
    clearScore.setAttribute("class","btn btn-primary");
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


pageOne.setAttribute("style","padding:100px; text-align:left;");
Time.setAttribute("style","position:fixed; top:20px; left:20px");
Highscore.setAttribute("style","position:fixed; top:20px; right:20px;");
Time.textContent="The rest of your time is: "+timer;
Highscore.textContent="High Score: "+bestPlayer+" "+ highScores;

satartQuiz.addEventListener("click",start);





