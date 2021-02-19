const signup_form = document.querySelector('#signup');
const username = document.querySelector('#username');
const password = document.querySelector('#pwd');
const email = document.querySelector('#email')
const gender = document.querySelector('#gender')
// adding eventlistener
signup_form.addEventListener('submit', register)

function register(e) {
    e.preventDefault();
    let username_len = checkLength(username.value, 5);
    let password_len = checkLength(password.value, 8);
    let email_len = checkLength(email.value, 6)

    // create a new object with the form info
    let newUser = {
        username: username.value,
        password: password.value,
        email: email.value,
        gender: gender.value
    }

    // Insert the object into the database 
    let transaction = DB.transaction(['Accounts'], 'readwrite');
    let objectStore = transaction.objectStore('Accounts');
    if (!username_len) {
        username.style.borderColor = "red"
        if (!password_len) {
            password.style.borderColor = "red"
        }
    } else {
        let request = objectStore.add(newUser);
        localStorage.setItem("loggedIn", newUser.username)
        request.onsuccess = () => {
            location = "../index.html"
        }
        transaction.oncomplete = () => {

            console.log('New user added');
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }
    }



}
function checkLength(string, len) {
    if (string.length >= len) {
        return true
    }else{
        return false
    }
}