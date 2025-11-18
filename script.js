const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
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
const hideText = () => {
    document.getElementById("help-btn-id").innerHTML="";
}

const showText = () => {
    document.getElementById("help-btn-id").innerHTML='<i class="fa-solid fa-circle-question"></i> Help?';
}

const submitSignInUp = () => {
    const formIdVal = document.getElementById("formId").value;

    if (formIdVal === "signin") {
        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-psw").value.trim();
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        alert("Login successful!");
    }

    else if (formIdVal === "signup") {
        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-psw").value.trim();
        if (fullName === "" || email === "" || password === "") {
            alert("Please fill all required fields.");
            return;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }
        alert("Signup successful!");
    }
};
