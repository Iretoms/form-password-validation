const labels = document.querySelectorAll('.form-control label')
const passwordEl = document.getElementById('password')
const seeButton = document.querySelector('.seeBtn')
const submitButton = document.querySelector('.btn')

labels.forEach(label =>{
    label.innerHTML = label.innerText
          .split('')
          .map((letter, idx)=>`<span
           style="transition-delay: ${idx * 50}ms">${letter}</span>`)
          .join('')
})

seeButton.addEventListener('click',()=>{
    const type = passwordEl.getAttribute("type") === "password" ? "text" : "password"
    passwordEl.setAttribute("type", type)
})

passwordEl.addEventListener('input',(e)=>{
    if (passwordEl.value === ''){
        seeButton.classList.remove('show')
    } else {
        seeButton.classList.add('show')
    }

    checkPassword(e.target.value)
})

function checkPassword(input){
    let check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    //check variable checks if the password contains
    // at least one number, one uppercase, one lowercase 
    // and also between 6 to 10 length

    if (input.match(check)){
        submitButton.disabled = false
    } else {
        submitButton.disabled = true
    }
}

