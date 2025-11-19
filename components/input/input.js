const togglebtn = (element) => {
    if (element.id == "signin"){
        const signinBtn = document.getElementById('signin');
        signinBtn.classList.add('active')
        const signupBtn = document.getElementById('signup');
        signupBtn.classList.remove('active')
        const loginForm = document.getElementById('login-form-id');
        loginForm.classList.add('active-form')
        loginForm.classList.remove('inactive-form')
        const signupForm = document.getElementById('signup-form-id');
        signupForm.classList.add('inactive-form')
        signupForm.classList.remove('active-form')

        document.getElementById('createAccountBtn').innerHTML = "Next Step"

        document.getElementById('formId').value = "signin"
    } 
    else{
        const signinBtn = document.getElementById('signin');
        signinBtn.classList.remove('active')
        const signupBtn = document.getElementById('signup');
        signupBtn.classList.add('active')
        const signupForm = document.getElementById('signup-form-id');
        signupForm.classList.add('active-form')
        signupForm.classList.remove('inactive-form')
        const loginForm = document.getElementById('login-form-id');
        loginForm.classList.add('inactive-form')
        loginForm.classList.remove('active-form')

        document.getElementById('createAccountBtn').innerHTML = "Create Account"

        document.getElementById('formId').value = "signup"
    }
    
} 