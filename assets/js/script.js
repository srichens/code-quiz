//I used the querySelector method to target different headings to change them for each question/funcion/page
let count = 0;
let startEl = document.querySelector("#start-button");
let countEl = document.querySelector("#timer-count");
let secondsEl = document.querySelector("#timer-words");
let questionEl = document.querySelector("#question-title");
let answersEl = document.querySelector("#answers");
let answers2El = document.querySelector("#answers2");
let answers3El = document.querySelector("#answers3");
let divEl = document.querySelector("div");
let hiScoreMess = document.querySelector("#high-score");
let lastScoreMess = document.querySelector("#last-score");
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score = 0;
let scoreNum = 0;
let userLast = 0;

//the countDown function starts after the click from the eventListener 

function countDown() {
    count = 60; 
    let myInterval = setInterval(counting,1000); 
    function counting(){
        count--; 
        countEl.textContent = count;
        //Goes to the first page/function after 1 second 
        //Allows both the countdown to start and the first question function to be fired by clicking the start button
        if (countEl.textContent == 59){
            startQuiz();
        } 
        //if time runs out and the count gets to zero, it calls the scorePage function to end the quiz 
        if(count === 0) {
            clearInterval(myInterval); scorePage();
        }
    }
}

startEl.addEventListener("click", countDown);

//I decided to make each quiz question a function, which created some interesting situations
//In order to have each set of questions appear at the same place in the page, I used a flexbox and changed position at the start of each page function
//The questions were all hidden at the start of the quiz, and then each page function made its set of questions visible

function startQuiz(){
    console.log("quiz has started");
    questionEl.textContent = "Who invented Javascript and in what year?";
    //Used .style instead of setAtribute, since we talked about in class how setAttribute isn't the best way to change css
    answersEl.style.visibility = "visible";
    startEl.style.visibility = "hidden";
    countEl.style.color = "red";
    
    let button1El = document.querySelector("#button1");
    let button2El = document.querySelector("#button2");
    let button3El = document.querySelector("#button3");
        
    button1El.textContent = "1. Brendan Eich in 1995";
    button2El.textContent = "2. Steve Jobs in 1984";
    button3El.textContent = "3. Elon Musk in 2053";
    
    //a click eventlistener on each answer fires the message function that gives a correct or incorrect alert
    
    button1El.addEventListener("click", message1);
    button2El.addEventListener("click", message2);
    button3El.addEventListener("click", message3);
  
    //every message functions fires the next question function, so that you only have one change to answer
    //the message functions also keep score; the score variables were declared universally to make a total score available at the end
    function message1(){
        alert("Correct!"); score1 = 1;
         secondQuestion();
    }

    function message2(){
        alert("Incorrect!"); count = count - 10; score1 = 0;
        secondQuestion();
    }

    function message3(){ 
        alert("Incorrect!"); count = count - 10; score1 = 0;
        secondQuestion();
    }
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    
    }    
}

function secondQuestion(){
    console.log("This is the second question");
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "visible";
    //targeting the div element allowed me to use flexbox to move the second set of questions to the top center
    divEl.style.flexDirection = "row";
    divEl.style.justifyContent = "space-evenly";
    questionEl.textContent = "What method attaches an event handler to a specified element?";

    let button21El = document.querySelector("#button21");
    let button22El = document.querySelector("#button22");
    let button23El = document.querySelector("#button23");
        
    button21El.textContent = "1. toUpperCase()";
    button22El.textContent = "2. addEventListener()";
    button23El.textContent = "3. addButtonClick()";

    button21El.addEventListener("click", message21);
    button22El.addEventListener("click", message22);
    button23El.addEventListener("click", message23);
   
    function message21(){
        alert("Incorrect!"); count = count - 10; score2 = 0;
        thirdQuestion();
    }

    function message22(){
        alert("Correct!"); score2 = 1;
        thirdQuestion();
    }

    function message23(){
       alert("Incorrect!"); count = count - 10; score2 = 0;
        thirdQuestion();
    }   
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    }       
}

function thirdQuestion(){
    console.log("this is the third question");
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "hidden";
    answers3El.style.visibility = "visible";
    //column-reverse put the third question at the top center
    divEl.style.flexDirection = "column-reverse";
    questionEl.textContent = "What method cancels an event (if it is cancelable)?";

    let button31El = document.querySelector("#button31");
    let button32El = document.querySelector("#button32");
    let button33El = document.querySelector("#button33");
    
    button31El.textContent = "1. Event Bubbling";
    button32El.textContent = "2. getElementById()";
    button33El.textContent = "3. preventDefault()";

    button31El.addEventListener("click", message31);
    button32El.addEventListener("click", message32);
    button33El.addEventListener("click", message33);
         
    //the messages in the last question call the scorepage function to end the quiz
    function message31(){
        alert("Incorrect!"); count = count - 10; score3 = 0;
        scorePage();
    }

    function message32(){
       alert("Incorrect!"); count = count - 10; score3 = 0;
        scorePage();
    }

    function message33(){
      alert("Correct!"); score3 = 1;
        scorePage();
    }   
   
    countEl.textContent = count;
    if(count === 0) {
        clearInterval(myInterval); 
    }          
}

function scorePage(){
    console.log("this is the score page");
    score = score1 + score2 + score3;
    startEl.style.visibility = "hidden";
    countEl.style.visibility = "hidden";
    secondsEl.style.visibility = "hidden";
    answersEl.style.visibility = "hidden";
    answers2El.style.visibility = "hidden";
    answers3El.style.visibility = "hidden";
    lastScoreMess.style.visibility = "visible";
       
    if (score ===1) {questionEl.textContent = "You got " + score + " question correct"} 
    else {questionEl.textContent = "You got " + score + " questions correct"}; 
    
    //I wanted to use the appendChild method learned this week, so I looked up how to add a form by appending
    //This also allowed me to use setAttribute for something other than css styling
    let form = document.createElement("form");
   
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "Initials");
    nameInput.setAttribute("placeholder", "Please enter your intials");
    nameInput.setAttribute("id", "name");

    form.appendChild(nameInput);

    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.setAttribute("id", "submit");

    form.appendChild(submit);

    questionEl.appendChild(form);
    
    //the submit and submission elements will be used to produce a message after user initials are submitted
    let submitEl = document.querySelector("#submit");
    let submissionResponseEl = document.querySelector("#submission");
    
    //targeting #name allows me to capture the previous user while preserving the current user
    let nameAdd = document.querySelector("#name");
    
    //this function saves the intials and score of current user
    function saveScore () {
        let savedScore = {
            userScore: score,
            userName: nameAdd.value
        };
        localStorage.setItem("savedScore", JSON.stringify(savedScore));
    }
    
    //this function retrieves the user and score and places it in the html 
    //It is called now before the current user submits, so we can see the previous score

    renderLastScore();
    
    saveLastScore();

    //saveLastScore get the last score and stores the propoerties in variables
    //allows us to store previous score and compare to current score

    function saveLastScore() {
        let lastScore = JSON.parse(localStorage.getItem("savedScore"));
        if (lastScore !== null) {
        scoreNum = lastScore.userScore;
        userLast = lastScore.userName;            
        } else {  lastScoreMess.style.visibility = "hidden";
            return;     
        };
    }
       
    function renderLastScore() {
        let lastScore = JSON.parse(localStorage.getItem("savedScore"));
        if (lastScore !== null) {
        document.getElementById("saved-name").innerHTML = lastScore.userName;
        document.getElementById("saved-score").innerHTML = lastScore.userScore;
        } else { 
            return;
        }
    }
     
    //this is the action for the submit initials button
    submitEl.addEventListener("click", showResponse);    

    //I used the preventDefault so the submit button wouldn't try to send the textinput somewhere
    function showResponse(event) {
        event.preventDefault();
        
        lastScoreMess.style.visibility = "hidden";
        
        //calling saveScore saves current user info
        saveScore ();

        //I couldn't figure out how to save more scores than the previous one, so I settled for only
        //comparing the current and previous
        //Also, the current user becomes the high score if they tie, because that was easier
        if (scoreNum <= score) {hiScoreMess.textContent = "You have the high score with " + score} 
        else if (scoreNum > score) {hiScoreMess.textContent = "The last user " + userLast + " has the high score with " + scoreNum};
        
        //calling renderLastScore turns current user info into last user for the next person who takes the quiz
        renderLastScore();              
        let response = "Thank you. Your score has been recorded.";               
        submissionResponseEl.textContent = response;                         
    }
    
}


//I did not include a button that clears the quiz and goes back to the beginning. 
//I have so many functions and buttons and functions within functions, 
//I was afraid to add any more and break it all.



