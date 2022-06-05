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

passwordEl.addEventListener('input',()=>{
    if (passwordEl.value === ''){
        seeButton.classList.remove('show')
    } else {
        seeButton.classList.add('show')
    }

    checkPassword()
})

