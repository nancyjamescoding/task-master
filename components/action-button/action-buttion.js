const hideText = () => {
    document.getElementById("help-btn-id").innerHTML="";
}

const showText = () => {
    document.getElementById("help-btn-id").innerHTML='<i class="fa-solid fa-circle-question"></i> Help?';
}