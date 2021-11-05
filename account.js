// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// const user = {
//   userName: form.uname.value,
//   password: form.psw.value,
//   eMail: form.email.value
// }

// console.log(user);



const form_login = document.getElementById("form-login");
// console.log(form_login);
form_login.addEventListener('submit', function(event){
  event.preventDefault();
  const user = {
    username: form_login.uname.value,
    password: form_login.psw.value,
    email: form_login.email.value

  }
  console.log(user);

})