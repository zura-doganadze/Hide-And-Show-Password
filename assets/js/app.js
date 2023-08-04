let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.addEventListener("click", ()=> {
    if(password.type == "password") {
        password.type = "text";
        eyeicon.src = "assets/img/eye-open.png"
    } else {
        password.type = "password"
        eyeicon.src = "assets/img/eye-close.png"
    }
})