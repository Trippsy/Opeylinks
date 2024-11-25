
const email = document.querySelector('email');
const form = document.querySelector('form');
const errorElement =  document.querySelector('.error')
const errorMessage=  document.querySelector('.passworderror')
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  console.log(email,password);

  let messages =['Email is required!', 'Password Required']

  if (email === '' || email == null) {
 
    errorElement.innerText = messages[0]
    }
   
    if (password === '' || password == null){
       errorMessage.innerText = messages[1]
    }
  // if(password.length <= 6){
  //   messages.push('Password should be longer than 6')
  // }
if (messages.length > 0) {
  event.preventDefault()
  
 
 
}
}); 