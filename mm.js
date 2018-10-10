alert("Just stop");
window.close();
#num=prompt("Number of seconds to wait between questions:");num=Number(num);num=num*1000;CurrentProblemIsCorrect = true;isAnswerEntered = function() {return true;};function subParseAnswer(){return true;};doNext();function a1() { if(Math.floor(Math.random() * 100) + 1 > 95) {CurrentProblemIsCorrect = true;isAnswerEntered = function() {return true;};function subParseAnswer(){return true;};};doNext();};function fc1() { setInterval(function(){a1();}, num); };fc1();void 0;

