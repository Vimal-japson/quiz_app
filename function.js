
const questions = [
    {
        question : "Who is first Prime Minster from South India?",
        answer : [
            {text: "Manmohan Singh" , correct: false},
            {text: "Deve Gowda" , correct: false},
            {text: "Narasimha Rao", correct: true},
            {text: "M.K.Stalin", correct: false}
        ]
    },
    {
        question : "Who is finance minister of Tamil Nadu?",
        answer : [
            {text: "PTR" , correct: false},
            {text: "Velumani" , correct: false},
            {text: "K.N.Nehru", correct: false},
            {text: "Thangam Thennarasu", correct: true}
        ]
    },
    {
        question : "What is the official Language of India?",
        answer : [
            {text: "Tamil" , correct: false},
            {text: "Hindi" , correct: false},
            {text: "No official Language", correct: true},
            {text: "English", correct: false}
        ]
    },
    {
        question : "What is the type of Indian Economy?",
        answer : [
            {text: "Captalist Economy" , correct: false},
            {text: "Communist Economy" , correct: false},
            {text: "Mixed Economy", correct: true},
            {text: "Socialist Economy", correct: false}
        ]
    },
    {
        question : "What is the official Religion of India",
        answer : [
            {text: "Hindu" , correct: false},
            {text: "Islam" , correct: false},
            {text: "Christianity", correct: false},
            {text: "No official religon", correct: true}
        ]
    },
    {
        question : "What is Capital of Australia?",
        answer : [
            {text: "Sydney" , correct: false},
            {text: "Melbourne" , correct: false},
            {text: "Perth", correct: false},
            {text: "Canberra", correct: true}
        ]
    },
    {
        question : "Who Painted the Mona Lisa",
        answer : [
            {text: "Vincent van Gogh" , correct: false},
            {text: "Pablo Picasso" , correct: false},
            {text: "Michel angelo", correct: false},
            {text: "Leonardo Davinci", correct: true}
        ]
    },
    {
        question : "What is the largest ocean in the world?",
        answer : [
            {text: "Atlantic Ocean" , correct: false},
            {text: "Indian Ocean" , correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question : "Which planet is known as the Red Planet?",
        answer : [
            {text: "Venus" , correct: false},
            {text: "Jupiter" , correct: false},
            {text: "Earth", correct: false},
            {text: "Mars", correct: true}
        ]
    },
    {
        question : "What is the currency of Japan?",
        answer : [
            {text: "Euro" , correct: false},
            {text: "Dollar" , correct: false},
            {text: "Rupee", correct: false},
            {text: "Yen", correct: true}
        ]
    }
]


const question = document.getElementById("question");
const AnswerButton = document.getElementById("jap");
const NextButton = document.getElementById("start");
const result = document.getElementById("number");
const previous = document.getElementById("prev");
const app = document.getElementById("app");
previous.style.display = "None"
NextButton.innerHTML = "Start"
var index = -1;





function startQuiz(value){
    NextButton.innerText = "Next";
    istrue = value;
    previous.style.display = "block";
    question.style.marginBottom = "1.3em";
    app.style.marginTop = "1em";
    
   
   if(istrue){
   index++;
   }
    curruntQues = questions[index];
  
    

    question.innerText = index+1  + ") " + curruntQues.question;
    result.innerText = index+1 + " of 10 Questions";
    
    
    curruntQues.answer.forEach( e => {
        const button = document.createElement("button");
        button.innerHTML = e.text;
        button.classList.add("btn");
        AnswerButton.appendChild(button); 
        if(e.correct){
            button.dataset.correct = e.correct;
        }  
        button.addEventListener("click",function(e){
            selectedBtn = e.target;
            isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
                selectedBtn.classList.add("correct");
            }
            else{
                selectedBtn.classList.add("incorrect");
            }
            Array.from(AnswerButton.children).forEach(button=>{
                if(button.dataset.correct){
                    button.classList.add("correct");
                }
                button.disabled = true;
            })
            NextButton.style.display = "block"
        })   
})


}

function reset(){
    while(AnswerButton.firstChild){
        AnswerButton.removeChild(AnswerButton.firstChild);
    }
}

NextButton.addEventListener("click", function(){
    reset();
    if(index>8){
        index = -1;
    }
    startQuiz(true);
})

previous.addEventListener("click", ()=>{
    index--;
    reset();
    if(index<0){
        index = 9;
    }
    startQuiz(false);
    
});






