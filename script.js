const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signin');
const signUpForm=document.getElementById('signup');
signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click',function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})
function togglepassword(){
    var passwordfield=document.getElementById("password")
    var toggleIcon=document.getElementById("togglepassword");
    if (passwordfield.type==="password"){
        passwordfield.type="text";
        toggleIcon.classList.remove("fas-fa-eye");
        toggleIcon.classList.add("fas-fa-slash");
    }else{
        passwordfield.type="password";
        toggleIcon.classList.add("fas-fa-eye");
        toggleIcon.classList.remove("fas-fa-slash");
    }
}