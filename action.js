var savingsButton = $('.savingsButton');
var investmentButton = $('.investmentButton');

var savingsInfo = $('.savingsInfo');
var investmentInfo = $('.investmentInfo');

savingsButton.on('click', showPara1);

function showPara1() {
  savingsInfo.toggleClass('show');
}

investmentButton.on('click', showPara2);

function showPara2() {
  investmentInfo.toggleClass('show');
}