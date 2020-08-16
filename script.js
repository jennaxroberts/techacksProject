var button1 = $(".button1");
var button2 = $(".button2");
var button3 = $(".button3");

var para1 = $(".rule72");
var para2 = $(".companyInterest");
var para3 = $(".saveMoney");

button1.on('click', showPara1);
button2.on('click', showPara2);
button3.on('click', showPara3);

function showPara1() {
  para1.toggleClass('show');
}
function showPara2() {
  para2.toggleClass('show');
}
function showPara3() {
  para3.toggleClass('show');
}

button1.on("click", hideMargin1);
button2.on("click", hideMargin2);

function hideMargin1(){
  button2.toggleClass("noMarginTop")
}
function hideMargin2(){
  button3.toggleClass("noMarginTop")
}

//jenna tries to copy esther's cool coding skilzz

var button4 = $(".button4");
var button5 = $(".button5");
var button6 = $(".button6");
var button7 = $(".button7");

var para4 = $(".stocks");
var para5 = $(".bonds");
var para6 = $(".mutualFunds");
var para7 = $(".indexFunds");


button4.on('click', showPara4);
button5.on('click', showPara5);
button6.on('click', showPara6);
button7.on('click', showPara7);

function showPara4() {
  para4.toggleClass('show');
}
function showPara5() {
  para5.toggleClass('show');
}
function showPara6() {
  para6.toggleClass('show');
}
function showPara7() {
  para7.toggleClass('show');
}

// jenna makes more buttons - lets see how this goes ... 
//how coolz- e-cat