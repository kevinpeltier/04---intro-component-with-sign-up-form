// Global

const claimButton = document.getElementById('claimSubmit');
const firstName = document.getElementById('formFirstName');
const lastName = document.getElementById('formLastName');
const email = document.getElementById('formEmail');
const password = document.getElementById('formPassword');
const formBody = document.getElementById('joinForm');
const passwrdError = document.getElementById('passwordError');
const modal = document.getElementById("termsModal")
const termsBtn = document.getElementById("termsBtn");
const span = document.getElementsByClassName("close")[0];



claimButton.addEventListener('click', () => {
    let message = []
    
    if (password.value.length <= 6) {
        message.push('Password must be more than 6 characters');
    } else {
            formBody.innerHTML = 'Thank you for applying! <br><br> This is a test website for frontend only. <br><br>  <a href="index.html" class="refresh">Click Here to <b>Refresh!</b></a>';
            formBody.style.color = "hsl(154, 59%, 51%)";
            document.getElementById('welcome-msg').style.display = "none";
            document.getElementById('advert').style.display= "none";
        }

    if (password.value.length < 6 && password.value.length > 0){
        e.preventDefault();
    }


    if (message.length > 0) {
        passwordError.innerText = message.join('')
    }  

})



termsBtn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}