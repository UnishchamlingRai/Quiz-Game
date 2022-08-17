const start_quiz=document.querySelector('.start_quiz');
const quiz_box=document.querySelector('.quiz-box');
const que_text=quiz_box.querySelector('.que_text');
const options_box=quiz_box.querySelector('.options');
const next_btn=quiz_box.querySelector('.next_btn');
const que_count=document.querySelector('.que_count');
const que_total=document.querySelector('.que_total');
const result_box=document.querySelector('.result-box');


const total_que_result=document.querySelector('.total-que');
const right_ans_result=document.querySelector('.right-ans');
const wrong_ans_result=document.querySelector('.wrong-ans');
const percentage_result=document.querySelector('.percentage')

const again_quiz=document.querySelector('.again_quiz');
const exit=document.querySelector('.exit');

start_quiz.onclick=()=>{
    quiz_box.classList.remove('inactive')
    start_quiz.classList.add('inactive')
}


que_total.innerText=questions.length;
total_que_result.innerText=`Total Question:${questions.length}`;


var que_index=0;
var right_answer=0;
var wrong_answer=0;

que_count.innerText=que_index+1;
showQuestions(que_index);
function showQuestions(q_index){
    que_text.innerHTML=questions[q_index].num+". "+questions[q_index].question;
var option_statement="";
 for(var i=0; i<questions[q_index].options.length; i++){
     option_statement=`<div class="option">${questions[q_index].options[i]}</div>`+option_statement;
}

options_box.innerHTML=option_statement;

var Alloptions=options_box.querySelectorAll('.option');
for(var j=0; j<Alloptions.length; j++){
    Alloptions[j].setAttribute('onclick',"UserAnswer(this)")  
}
next_btn.classList.add('inactive');
}

next_btn.onclick=()=>{
    que_index++;
    if(questions.length>que_index){
        showQuestions(que_index);
        que_count.innerText=que_index+1; 
    }
    else{
        console.log("question Complete")
        quiz_box.classList.add("inactive");
        result_box.classList.remove("inactive");
        right_ans_result.innerText=`Right Answer:${right_answer}`;
        wrong_ans_result.innerText=`Wrong Answer:${wrong_answer}`;
        percentage_result.innerText=`Percentage:${((right_answer*100)/questions.length).toFixed(2)}%`;
        

    }
    if(questions.length-1==que_index){
        next_btn.innerText="Finish"
    }
}

function UserAnswer(answer){
   
    let userAns=answer.innerText;
    let correstAns=questions[que_index].answer;
    var Alloptions2=options_box.querySelectorAll('.option');
    next_btn.classList.remove('inactive');

    if(userAns===correstAns){
        console.log("%c Correct Answer","color:green");
        answer.classList.add('correct');
        right_answer++;
    }
    else{
        console.log("%c Wrong Answer","color:red");
        answer.classList.add('incorrect');
        wrong_answer++;

    }

    for(var i=0; i<Alloptions2.length; i++){
        if(Alloptions2[i].innerText==correstAns){
            Alloptions2[i].classList.add("correct");
            
        }
    }

    
    for(var j=0; j<Alloptions2.length; j++){
    Alloptions2[j].classList.add('disable');
}
}

again_quiz.onclick=()=>{
    quiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    reset();
}

exit.onclick=()=>{
    start_quiz.classList.remove("inactive");
    result_box.classList.add("inactive");
    reset();
}

function reset(){
    que_index=0;
    right_answer=0;
    wrong_answer=0;
    next_btn.innerText="Next Questions"
    que_count.innerText=que_index+1;
    showQuestions(que_index);

}