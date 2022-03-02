document.getElementById('submit-button').addEventListener('click',function(){

    // for getting user Email address
    const userEmail = document.getElementById('user-email');
    const getUserEmail = userEmail.value;
    userEmail.value = '';
    // console.log(getUserEmail);

    // for getting user password
    const userPassword = document.getElementById('user-password');
    const getUserPassword = userPassword.value;
    userPassword.value = '';
    // console.log(getUserPassword);

    // Validity Checking
    if(getUserEmail == 'abc@gmail.com' && getUserPassword == 'secret'){
       window.location.href= 'Banking.html'
    }
})
