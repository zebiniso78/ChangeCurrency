var elForm=document.querySelector(".form");
var elInputMoney=document.querySelector(".input-money");
var elSelectOption=document.querySelector("#currency-result");
var elResult=document.querySelector(".currency-result");


elForm.addEventListener("submit", function(evt) {
evt.preventDefault();

elResult.textContent="Your money is: " + elInputMoney.value/elSelectOption.value;
})