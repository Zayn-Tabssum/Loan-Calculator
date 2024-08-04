document.getElementById('calculatebtn').addEventListener('click',calculate);


function calculate(){



 const loanamount=parseFloat(document.getElementById('loanamount').value);
 const interstrate=parseFloat(document.getElementById('interstrate').value);
 const loanterm=parseFloat(document.getElementById('loanterm').value);

if(isNaN(loanamount) || isNaN(interstrate) || isNaN(loanamount)){
 alert("Please Enter valid Number for all the Fields")
}

const monthlyinterest = interstrate / 100 /12;
const totalPayment = loanterm;
const monthlyPayment =(loanamount * monthlyinterest)/(1-Math.pow(1+monthlyinterest, -totalPayment));

const totalintrest= (monthlyPayment * totalPayment)- loanamount;

displayResult(monthlyPayment, totalintrest);
}


function displayResult(monthlyPayment, totalintrest){
 const resultDiv = document.getElementById('result');
 resultDiv.innerHTML=`
 <p><strong> Monthly Payment : ${monthlyPayment.toFixed(2)}</strong></p>
 <p><strong> Total Interest  : ${totalintrest.toFixed(2)}</strong></p>
 `;
}