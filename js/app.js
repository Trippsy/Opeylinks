
const email = document.querySelector('email');
const form = document.querySelector('form');
const errorElement =  document.querySelector('.error')
const errorMessage =  document.querySelector('.usererror')
const errorPassword =  document.querySelector('.passworderror')

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  const username = event.currentTarget.username.value;
  const password = event.currentTarget.password.value;
  const confirmpassword = event.currentTarget.confirmpassword.value;
  const agree = event.currentTarget.agree.value;


  let messages =['Username is required!', 'Email is required!', 'Password Required']

  if (email === '' || email == null) {
    // messages.push ('Email is required!')
    errorElement.innerText = messages[1]
    }
    if (username === '' || username == null){
      // messages.push ('username is required!')
      errorMessage.innerText = messages[0]
      
    }
    if (password === '' || password == null){
       errorPassword.innerText = messages[2]
    }
  // if(password.length <= 6){
  //   messages.push('Password should be longer than 6')
  // }
if (messages.length > 0) {
  event.preventDefault()
  
 
 
}
}); 