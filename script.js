//Login Button Event Handeler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
   const loginArea = document.getElementById('login-ares');
   loginArea.style.display = "none";
   const transactionArea = document.getElementById('transaction-area');
   transactionArea.style.display = 'block';
});

const depositBtn = document.getElementById('deposit-button');
depositBtn.addEventListener('click', function () {
    var depositNumber = getInputNumber("deposit-ammount");
    /*
    const depositAmount = document.getElementById('deposit-ammount').value; // input field number find
    const depositNumber = parseFloat(depositAmount);// convert string to number

    const currentDeposit = document.getElementById("current-Deposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("current-Deposit").innerText = totalDeposit;

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById('current-balance').innerText = totalBalance;
*/
    updateSpanText('current-Deposit', depositNumber);  //function Call
    
    updateSpanText('currentBalance', depositNumber); //Function Call

    document.getElementById('deposit-ammount').value = ""; // input fild nothing
});

const withdrawBtn = document.getElementById('withdraw-button');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber("withdraw-ammount")
    updateSpanText('totalWithdraw-ammount', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber)
    document.getElementById('withdraw-ammount').value = "";
})

function getInputNumber(id){
    const Ammount = document.getElementById(id).value;
    const anotherNumber = parseFloat(Ammount);
    return anotherNumber;
}



//function use for no repitation code
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmmount;
}

/*
//Withdraw Event Handeler
const withdrawBtn = document.getElementById('withdraw-button');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmmount = document.getElementById('withdraw-ammount').value;
    const withdrawNumber = parseFloat(withdrawAmmount);

    const currentWithdraw = document.getElementById('currentBalance').innerText;
    const currentWithdrawNum = parseFloat(currentWithdraw);
    const allWithdraw = currentWithdrawNum - withdrawNumber ;
    document.getElementById('currentBalance').innerText = allWithdraw;

    const withdrawMoney = document.getElementById('totalWithdraw-ammount').innerText;
    const ammountNumber = parseFloat(withdrawMoney);
    const totalWithdrawMoney = withdrawNumber + ammountNumber;
    document.getElementById('totalWithdraw-ammount').innerText = totalWithdrawMoney;

    

    document.getElementById('withdraw-ammount').value = "";
})
*/








