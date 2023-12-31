registerForm = document.forms['register']

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    registeeName = registerForm.name.value
    description = registerForm.description.value
    phoneNumber = registerForm.phNo.value

    console.log(registeeName)
    console.log(description)
    console.log(phoneNumber)

    registerForm.name.value = ""
    registerForm.description.value = ""
    registerForm.phNo.value = ""
})


var typed = new Typed('#Registrar', {
    strings: ['Register to join Baka Mitai!!', 'Register to join us!!', 'Register to be part of the Team!!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    shuffle: true,
    smartBackspace: true, // this is a default
    loop: true,
    loopCount: Infinity,
    showCursor: false
});