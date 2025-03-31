const menu = document.querySelector('#menu')
const menuBar = document.querySelector('#menu-bar')
const dropDown = document.querySelector('.dropdown')
const dropUp = document.querySelector('.dropup')
menu.addEventListener('click', function () {
  let Display = menuBar.style.display
  Display = 'none'
  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'block'
    dropDown.style.display = "none"
    dropUp.style.display = "block"
    console.log(Display);

  } else {
    menuBar.style.display = 'none'
     dropDown.style.display = "block"
    dropUp.style.display = "none"
    console.log(Display);
  }
})

const email = document.querySelector('email');
const form = document.querySelector('form');
const errorElement = document.querySelector('.error')
const errorMessage = document.querySelector('.usererror')
const errorPassword = document.querySelector('.passworderror')
const errorEmail = document.querySelector('.emailerror')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.currentTarget.email.value;
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const confirmpassword = event.currentTarget.email.value;
    const email = event.currentTarget.email.value;
    console.log(name, username, password, confirmpassword, email)

    //   let messages =[]

    //   if (email.value === '' || email.value == null) {
    //     messages.push ('mail is required !')
    //     }
    // //   if(password.length <= 6){
    // //     messages.push('Password should be longer than 6')
    // //   }
    // if (messages.length > 0) {
    //   event.preventDefault()
    //   errorElement.innerText = messages.join(', ')
    // }
    let messages = ['Name can not be empty', 'Username is required!', 'Email is required!', 'Password is required']
    if (name === '' || name == null) {
        errorElement.innerText = messages[0]
    }
    if (username === '' || username == null) {
        errorMessage.innerText = messages[1]
    }
    if (email === '' || email == null) {
        errorEmail.innerText = messages[2]
    }
    if (password === '' || password == null) {
        errorPassword.innerText = messages[3]
    }
}); 