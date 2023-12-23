const inputs = document.querySelectorAll(".input");
const btn = document.querySelectorAll("button")[3];
console.log(btn)

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


inputs.forEach(i => i.addEventListener("focus", handleFocus));

inputs.forEach(i => i.addEventListener("focusout", handleFocusOut));

inputs.forEach(i => i.addEventListener("input", handleChange));
