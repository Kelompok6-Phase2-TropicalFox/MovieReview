const showSignin = (event) =>{
    $('#loginAcces').show()
    $('#registerAcces').hide()
    $('.home').hide()
    // $('.login-container').show()
}

const showRegister = (event) =>{
    $('#loginAcces').hide()
    $('#registerAcces').show()
    $('.home').hide()
    // $('.login-container').show()
}

const showHome = (event) =>{
    $('#loginAcces').hide()
    $('#registerAcces').hide()
    $('.home').show()
}

const loginForm = (event) =>{
    event.preventDefault()
    const email = $('#emailLogin').val()
    const password = $('#passwordLogin').val()
    console.log(email,password)
}

const registerForm = (event) =>{
    event.preventDefault()
    const email = $('#emailRegister').val()
    const password = $('#passwordRegister').val()
    console.log(email,password)
}

$(document).ready(function(){
    showSignin()
    $('#registerForm').click(showRegister)
    $('#loginForm').click(showSignin)
    $('#login').click(showHome)

    $('#login').click(loginForm)
    $('#register').click(registerForm)

})


$(document).ready(function(){
    initContent()
    if(localStorage.getItem('acces_token')){
        afterLogin()
        menuHome()
    }else{
        beforeLogin()
        menuLogin()
    }

    $('#nav-login').click(menuLogin)
    $('#nav-register').click(menuRegister)
    $('#logout').click(menuLogout)
    $('#edit-todo').click(menuEdit)
    $('#add-todo').click(menuAdd)
    
    // login 
    $('#formLogin').submit(loginForm)

})