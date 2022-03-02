
//=========================deposit button==============================//
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){

    //input deposit
    const depositInput = document.getElementById('deposit-input');
    const depositValue = depositInput.value;
    const depositCovert = parseFloat(depositValue)
    depositInput.value = ''; 
    
    // display deposit
    const depositDisplayValue = document.getElementById('deposit-field');
    const getDepositDisplayValue = depositDisplayValue.innerText;
    const depositCovertValue = parseFloat(getDepositDisplayValue)

    // total deposit
    const totalDeposit = depositCovert + depositCovertValue
    depositDisplayValue.innerText = totalDeposit;
    
 
  
})
//=========================deposit button==============================//





//=========================withdraw button==============================//
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function(){

    //input withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = withdrawInput.value;
    const withdrawConvert = parseFloat(withdrawValue);
    withdrawInput.value = '';
    

    //display withdraw
    const withdrawDisplayValue = document.getElementById('withdraw-field');
    const getWithdrawDisplayValue = withdrawDisplayValue.innerText;
    const withdrawConvertValue = parseFloat(getWithdrawDisplayValue);

    //total withdraw Value
    const totalWithdraw = withdrawConvert + withdrawConvertValue;
    withdrawDisplayValue.innerText = totalWithdraw;
})






//=========================withdraw button==============================//