/* 

document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const priviesDepositText = depositTotal.innerText;
    const priviesDepositAmount = parseFloat(priviesDepositText);


    const newDepositTotal = priviesDepositAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;



    const totalBalance = document.getElementById('total-balance');
    const newTotalBalance = totalBalance.innerText;
    const newTotalBalanceAmount = parseFloat(newTotalBalance);
    const presentTotalBalance = depositAmount + newTotalBalanceAmount;
    totalBalance.innerText = presentTotalBalance;


     depositInput.value = 0;
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const totalWithdraw = document.getElementById('total-withdraw');
    const newTotalWithdrawText = totalWithdraw.innerText;
    const newTotalWithdrawAmount = parseFloat(newTotalWithdrawText);

    const presentTotalWithdraw = newTotalWithdrawAmount + newWithdrawAmount;
    totalWithdraw.innerText = presentTotalWithdraw;



    const totalBalance = document.getElementById('total-balance');
    const newTotalBalanceText = totalBalance.innerText;
    const newTotalBalanceAmount = parseFloat(newTotalBalanceText);
    const presentTotalBalance = newTotalBalanceAmount - newWithdrawAmount;
    totalBalance.innerText = presentTotalBalance ;



    withdrawInput.value = 0;
}) */

/* document.getElementById('deposit-button').addEventListener('click', function(){
    let depositInput = document.getElementById('deposit-input');
    let depositAmount = parseFloat(depositInput.value);


    let depositTotal = document.getElementById('deposit-total');
    let priviesDepositAmount = parseFloat(depositTotal.innerText);


    depositTotal.innerText = depositAmount + priviesDepositAmount;


    let totalBalance = document.getElementById('total-balance');
    let newTotalBalance = parseFloat(totalBalance.innerText);

    totalBalance.innerText = newTotalBalance + depositAmount;

    depositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function(){
    let withdrawInput = document.getElementById('withdraw-input');
    let WithdrawAmount = parseFloat(withdrawInput.value);

    let totalWithdraw = document.getElementById('total-withdraw');
    let newWithdrawAmount = parseFloat(totalWithdraw.innerText);

    totalWithdraw.innerText = WithdrawAmount + newWithdrawAmount;

    let totalBalance = document.getElementById('total-balance');
    let newTotalBalance = parseFloat(totalBalance.innerText);

    totalBalance.innerText = newTotalBalance - WithdrawAmount;

    withdrawInput.value = '';
}) */

function getInput(inputId){
    let inputFiled = document.getElementById(inputId);
    let inputAmount = parseFloat(inputFiled.value);

    inputFiled.value = '';

    return inputAmount;


}
function upDataTotal(upDataId,depositAmount){
    let depositTotal = document.getElementById(upDataId);
    let priviesDepositAmount = parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositAmount + priviesDepositAmount;
    
}
function getCurrentBalance() {
    let totalBalance = document.getElementById('total-balance');
    let newTotalBalance = parseFloat(totalBalance.innerText);
    return newTotalBalance;
}
function upDataBalance(amount, isAdd){
    let totalBalance = document.getElementById('total-balance');
    let newTotalBalance = parseFloat(totalBalance.innerText);
    if(isAdd == true){
        totalBalance.innerText = newTotalBalance + amount;
    }else{
        totalBalance.innerText = newTotalBalance - amount;
    }
    
}


document.getElementById('deposit-button').addEventListener('click', function(){
   let depositAmount = getInput('deposit-input');
   if(depositAmount > 0){
    upDataTotal('deposit-total', depositAmount);
    upDataBalance(depositAmount, true);
   } 
})
document.getElementById('withdraw-button').addEventListener('click', function(){
  let WithdrawAmount = getInput('withdraw-input')
  let CurrentBalance = getCurrentBalance()
  if(WithdrawAmount > 0 && WithdrawAmount < CurrentBalance){
    upDataTotal('total-withdraw', WithdrawAmount);
    upDataBalance(WithdrawAmount, false);
  }
  if(WithdrawAmount > CurrentBalance){
    let error = document.getElementById('error');
    error.innerText = 'আপনার অ্যাকাউন্টে পর্যাপ্ত টাকা নেই ।';
  }   
})