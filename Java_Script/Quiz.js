

function test() {
document.getElementById("demo").style.visibility="hidden";
    var q1 = document.ques.Q1.value;
    var q2 = document.ques.Q2.value;
    var q3 = document.ques.Q3.value;
    var q4 = document.ques.Q4.value;
    var q5 = document.ques.Q5.value;
    var q6 = document.ques.Q6.value;
    var q7 = document.ques.Q7.value;
    var q8 = document.ques.Q8.value;
    var q9 = document.ques.Q9.value;
    var q10 = document.ques.Q10.value;
    var answers = 0;
    var marks = 0;
	
    if(q1 == "QPR") {
        answers++;
        marks = marks + 2;
        document.getElementById("q1").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q1").innerHTML = "Your answer is incorrect, The correct answer is QPR";
    }
    if(q2 == "PrestonNorthEnd"){
        answers++;
        marks = marks + 2;
        document.getElementById("q2").innerHTML = "Your answer is correct";
    }else {
        marks--;
        document.getElementById("q2").innerHTML = "Your answer is incorrect, The correct answer is Preston North End";
    }

    if(q3 == "MichaelOwen") {
        answers++;
        marks = marks + 2;
        document.getElementById("q3").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q3").innerHTML = "Your answer is incorrect, The correct answer is Michael Owen";
    }

    if(q4 == "BobWilson") {
        answers++;
        marks = marks + 2;
        document.getElementById("q4").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q4").innerHTML = "Your answer is incorrect, The correct answer is Bob Wilson";
    }

    if(q5 == "1996") {
        answers++;
        marks = marks + 2;
        document.getElementById("q5").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q5").innerHTML = "Your answer is incorrect, The correct answer is 1996";
    }

    if(q6 == "EdenHazard") {
        answers++;
        marks = marks + 2;
       	document.getElementById("q6").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q6").innerHTML = "Your answer is incorrect, The correct answer is Eden Hazard";
    }

    if(q7 == "11") {
        answers++;
        marks = marks + 2;
        document.getElementById("q7").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q7").innerHTML = "Your answer is incorrect, The correct answer is 11";
    }

    if(q8 == "WestHam") {
        answers++;
        marks = marks + 2;
        document.getElementById("q8").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q8").innerHTML = "Your answer is incorrect, The correct answer is West Ham";
    }

    if(q9 == "BlackburnRovers") {
        answers++;
        marks = marks + 2;
        document.getElementById("q9").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q9").innerHTML = "Your answer is incorrect, The correct answer is Blackburn Rovers";
    }

    if(q10 == "InterMilan") {
        answers++;
        marks = marks + 2;
        document.getElementById("q10").innerHTML = "Your answer is correct";
    }else{
        marks--;
        document.getElementById("q10").innerHTML = "Your answer is incorrect, The correct answer is Inter Milan";
    }
    //Background color change according to marks

    var body = document.getElementById("color");
	if(marks < 0){
		body.style.backgroundColor = '#950000';
    }if(marks >= 0 && marks <=4){
        body.style.backgroundColor = '#FF00FF';
    }if(marks >= 5 && marks <=7){
        body.style.backgroundColor = '#FF8000';
    }if(marks >= 8 && marks <=15){
        body.backgroundColor = '#00FF40';
    }if(marks >=16 && marks <= 20){
	    body.backgroundColor = '#004040';
	}
	
    document.getElementById("submit").style.visibility = "visible";
	document.getElementById("ans").innerHTML = "No. of correct answers is : " + answers;
	document.getElementById("marks").innerHTML = "Marks gained by you is: " + marks;
	document.getElementById("time").innerHTML = "Your Time : " + ((300-time)/60) + " Minutes";
    document.getElementById("demo").style.display ='none';
}

var time = 300;
function quiztime(){
    document.getElementById("demo").style.display="block"
    if(time > 0){
        time--;
        document.getElementById("demo").innerHTML = "Remaining Time "+time+" seconds.";
        setTimeout("quiztime()", 1000);
    }else{
        test();
    }
}
document.getElementById("demo").style.display="none";
setTimeout("quiztime()", 5000);


