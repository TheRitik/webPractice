let form = document.querySelector('form')

let button =  document.getElementById('button')
function showPopup(message) {
    // Create a full-screen overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create a pop-up message element
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = message;

    // Append the pop-up message element to the overlay
    overlay.appendChild(popup);

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Remove the overlay after a certain time (e.g., 3 seconds)
    setTimeout(function() {
      overlay.remove();
    }, 3000);
  }
button.addEventListener('click',function(e){
    e.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    console.log(email)
    console.log(password)
    if(email == "rk@gmail.com" && password == "1234"){
        console.log("Successfully Logged In")
        showPopup("Successfully Logged In")
    }
    else{
        console.log("Invalid credentials");
    }
})


