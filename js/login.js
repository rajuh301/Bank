document.getElementById('btnLogin').addEventListener('click', function(){

    const emailInfo = document.getElementById('emailFild');
    const emailConvert = emailInfo.value;

    const passinfo = document.getElementById('PasswordFild');
    const passconvert = passinfo.value;
    
    if(emailConvert == 'rajuh301@gmail.com' && passconvert == 123){
        window.location.href = 'index.html'
    }

    else{
        alert('Wring Password!')
    }

    
    
})


