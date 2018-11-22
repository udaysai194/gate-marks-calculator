var marksWeight = 1;
var Qno = 1;
var noOfQ = 0;
var correct = 0;
var wrong = 0;
var left = 0;
var percentage = 0;
var yourScore = 0;
var totalMarks = 0;
var totalLabel = document.getElementsByClassName("totalQuestions");

function getSelect() {
    marksWeight = parseInt(document.getElementById("marksWeight").value);
}

function getQNo() {
    Qno = document.getElementById("QNo").value;
    document.getElementById("QNoLabel").innerHTML = ""+Qno;
}

function onCorrect() {
    correct++;
    Qno++;
    noOfQ++;
    document.getElementById("QNoLabel").innerHTML = ""+Qno;
    yourScore += marksWeight;
    totalMarks += marksWeight;
    
}

function onWrong() {
    wrong++;
    Qno++;
    noOfQ++;
    document.getElementById("QNoLabel").innerHTML = ""+Qno;
    yourScore -= marksWeight/3;
    totalMarks += marksWeight;
}

function onLeft() {
    left++;
    Qno++;
    noOfQ++;
    document.getElementById("QNoLabel").innerHTML = ""+Qno;
    totalMarks += marksWeight;
}

function onCalculate() {
    percentage = (yourScore/totalMarks)*100;

    document.getElementById("yourScore").innerHTML = ""+yourScore.toFixed(2);
    document.getElementById("totalMarks").innerHTML = ""+totalMarks;
    document.getElementById("yourPercentage").innerHTML = ""+percentage.toFixed(2);
    document.getElementById("noCorrect").innerHTML = ""+correct;
    document.getElementById("noIncorrect").innerHTML = ""+wrong;
    document.getElementById("noLeft").innerHTML = ""+left;
    totalLabel[0].innerHTML = ""+noOfQ;
    totalLabel[1].innerHTML = ""+noOfQ;
    totalLabel[2].innerHTML = ""+noOfQ;

}

function onReset() {
    marksWeight = 1;
    Qno = 1;
    noOfQ = 0;
    correct = 0;
    wrong = 0;
    left = 0;
    percentage = 0;
    yourScore = 0;
    totalMarks = 0;

    document.getElementById("QNo").value = 1;
    document.getElementById("marksWeight").value = 1;
    document.getElementById("QNoLabel").innerHTML = ""+Qno;
    document.getElementById("yourScore").innerHTML = ""+yourScore;
    document.getElementById("totalMarks").innerHTML = ""+totalMarks;
    document.getElementById("yourPercentage").innerHTML = ""+percentage;
    document.getElementById("noCorrect").innerHTML = ""+correct;
    document.getElementById("noIncorrect").innerHTML = ""+wrong;
    document.getElementById("noLeft").innerHTML = ""+left;
    totalLabel[0].innerHTML = ""+noOfQ;
    totalLabel[1].innerHTML = ""+noOfQ;
    totalLabel[2].innerHTML = ""+noOfQ;
}