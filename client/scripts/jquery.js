const url = `http://localhost:3000/`

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

    $.ajax({
        method: 'GET',
        url: 'http://localhost:5000/reviews',
        headers: {
            access_token: localStorage.getItem('access_token') 
        }
    })
    .done(res => {
        res.forEach(element => {
            $('#tablebody').append(`
            <tr>
                <td>${element.link}</td>
                <td>${element.title}</td>
                <td>${element.review}</td>
            </tr>
        `)
        })
        
    })
}

const loginForm = (event) =>{
    event.preventDefault()
    const email = $('#emailLogin').val()
    const password = $('#passwordLogin').val()
    console.log(email,password)
    $.ajax({
        method: "POST",
        url: `http://localhost:5000/login`,
        data:{email, password}
    })
    .done(response => {
        
        localStorage.setItem("access_token", response.access_token)
    })
    .fail(err => console.log(err))
}

const registerForm = (event) =>{
    event.preventDefault()
    const email = $('#emailRegister').val()
    const password = $('#passwordRegister').val()
    $.ajax({
        method: "POST",
        url: `http://localhost:5000/register`,
        data:{email, password}
    })
    .done(response => {

        localStorage.setItem("access_token", response.access_token)
    })
    .fail(err => console.log(err))
    showSignin()
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


// $(document).ready(function(){
//     // initContent()
//     if(localStorage.getItem('acces_token')){
//         afterLogin()
//         menuHome()
//     }else{
//         beforeLogin()
//         menuLogin()
//     }

//     $('#nav-login').click(menuLogin)
//     $('#nav-register').click(menuRegister)
//     $('#logout').click(menuLogout)
//     $('#edit-todo').click(menuEdit)
//     $('#add-todo').click(menuAdd)
    
//     // login 
//     $('#formLogin').submit(loginForm)

// })

$(`#form-untuk-review`).submit(event => {
    event.preventDefault()

    const link = $("#form-untuk-review").val()
    const title = $("#add-title").val()
    const review = $("#add-review").val()
    console.log(link, title, review)
    $.ajax({
        method: "POST",
        url: `http://localhost:5000/reviews`,
        headers: {
            access_token: localStorage.getItem('access_token')
        },
        data: {
            link,
            title,
            review
        }
    })
    .done(response => {
        console.log(response)

        showHome()
    })
    .fail(err => console.log(err))
})

// $(`#`)