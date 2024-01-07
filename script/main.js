const inputs = document.querySelectorAll(".input");
const btn = document.querySelectorAll("button")[3];
const video = document.querySelectorAll("video")[0];
const checkboxVideo = document.querySelectorAll("input[type='checkbox']")[1];
// console.log(checkboxVideo)
// console.log(video)

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("spanActive");
}

const handleFocusOut = ({ target }) => {
    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove("spanActive");
    }
}

const handleChange = () => {
    const [username, password] = inputs;

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


inputs.forEach(i => i.addEventListener("focus", handleFocus));
inputs.forEach(i => i.addEventListener("focusout", handleFocusOut));
inputs.forEach(i => i.addEventListener("input", handleChange));
checkboxVideo.addEventListener("change", changeAnimation)