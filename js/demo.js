$(document).ready(function(){
    $(".butt").click(function(e){
        e.preventDefault()
    let email = $(".email").val();
    let password = $(".password").val();
    let myJsonObject = {
    email : email,
    password : password
    }
    
    $.post("https://reqres.in/api/login", myJsonObject, function(){
            window.location.href = "./demo.html"
        })

    })
})