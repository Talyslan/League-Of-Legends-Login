const inputs = document.querySelectorAll(".input");
const [username, password] = inputs;
const passwordImg = password.nextElementSibling; 
const btn = document.querySelectorAll("button")[3];
const video = document.querySelectorAll("video")[0];
const checkboxVideo = document.querySelectorAll("input[type='checkbox']")[1];
// console.log(checkboxVideo)
// console.log(video)

//Add class that makes span is Active
const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("spanActive");
}
//Remove class that makes span is Active
const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove("spanActive");
    }
}
//Verify inputs values and password hidden/visible
const handleChange = () => {
    if (password.value.length !== 0) {
        passwordImg.classList.remove("disappear");
    }
    else {
        passwordImg.classList.add("disappear");
    }

    if (username.value && password.value.length >= 8) {
        btn.removeAttribute("disabled");
    }
    else {
        btn.setAttribute("disabled", true)
    } 
};

const changeAnimation = ({ target }) => {
    console.log("evento ativado")
    console.log(target.checked)

    if (target.checked) {
        video.classList.add("disappear");
    }
    else {
        video.classList.remove("disappear");
    }
};

const changePasswordType = ({ target }) => {
    if (password.type === "password") {
        password.type = "text";
        target.src = "./images/password/HiddenPassword.png";
    }
    else {
        password.type = "password";
        target.src = "./images/password/VisiblePassword.png";
    }
};

inputs.forEach(i => i.addEventListener("focus", handleFocus));
inputs.forEach(i => i.addEventListener("focusout", handleFocusOut));
inputs.forEach(i => i.addEventListener("input", handleChange));
checkboxVideo.addEventListener("change", changeAnimation);
passwordImg.addEventListener("click", changePasswordType);