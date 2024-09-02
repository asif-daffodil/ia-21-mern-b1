const signUpForm = document.querySelector('#signUpForm');

signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const yourName = formData.get('yourName');
    if(!yourName){
        alert('Please enter your name');
        return;
    }
    signUpForm.reset();
});