document.getElementById('Submit-button').addEventListener('click',function(){

    // console.log('badal');

   const userEmailFile = document.getElementById('user-email');
   const userEmail = userEmailFile.value;

//    console.log(userEmail);

  const userPasswordFile = document.getElementById('user-password');
  const userPassword = userPasswordFile.value;

//   console.log(userPassword);

    if(userEmail == 'badal@gmail.com' && userPassword == 123456){
        window.location.href = 'banking.html';
    }

})
