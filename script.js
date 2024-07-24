// Global

const claimButton = document.getElementById('claimSubmit');
const firstName = document.getElementById('formFirstName');
const lastName = document.getElementById('formLastName');
const email = document.getElementById('formEmail');
const password = document.getElementById('formPassword');
const formBody = document.getElementById('joinForm');
const passwrdError = document.getElementById('passwordError');



claimButton.addEventListener('click', (e) => {
    let message = []

    
    if (password.value.length <= 6) {
        message.push('Password must be more than 6 characters')
    }  else {
            formBody.innerHTML = 'Thank you for applying! <br> This is a test website for frontend only. <br>  <a href="index.html" class="refresh">Click Here to <b>Refresh!</b></a>';
            formBody.style.color = "hsl(154, 59%, 51%)";
            document.getElementById('welcome-msg').style.display = "none";
            document.getElementById('advert').style.display= "none";
        }

    if (message.length > 0) {
        passwordError.innerText = message.join('')
    }  

    if (message.length >0) {
        e.preventDefault()
    } 

})





// formBody.innerHTML = 'Thank you for applying! <br> This is a test website for frontend only. <br>  <a href="index.html" class="refresh">Click Here to <b>Refresh!</b></a>';
// formBody.style.color = "hsl(154, 59%, 51%)";
// document.getElementById('welcome-msg').style.display = "none";
// document.getElementById('advert').style.display= "none";