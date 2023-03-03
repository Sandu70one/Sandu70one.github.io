
//loading the dom content
document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".pw-icon"),
        inputs = document.querySelectorAll(".singup-field li input");


    icons.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.parentElement.children[1].value) {
                const selectedClass = btn.classList;
                if (btn.classList.contains("fa-eye")) {
                    selectedClass.toggle("fa-eye");
                    selectedClass.toggle("fa-eye-slash");
                    btn.parentElement.children[1].type = "text";
                } else {
                    selectedClass.toggle("fa-eye");
                    selectedClass.toggle("fa-eye-slash");
                    btn.parentElement.children[1].type = "password";
                }
            }
        });
    });
});

//admin account details to log in
var users =[
    {
        username : "test",
        password : "123456789"
    },
]

//taking class and id into constants
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const subBtn = document.querySelector(".signup-btn")
const profileImg = document.querySelector(".round")
const signupC = document.querySelector(".signup-container")


//if the the admin username("test") correctly typed
username.addEventListener("keyup", () => {
    const curUsername = username.value
    if(signupC.classList.contains("false")){
        signupC.classList.remove("false")
    }
    if (curUsername == users[0].username) {
        if (!profileImg.classList.contains("show")) {
            profileImg.classList.add("show")
        }
    } else {
        if (profileImg.classList.contains("show")) {
            profileImg.classList.remove("show")
        }
    }
})

// if the admin password correctly typed
password.addEventListener("keyup", ()=> {
    if(signupC.classList.contains("false")){
        signupC.classList.remove("false")
    }
})

// checking entered details are matches with the array's values
function login(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    for(i=0 ; i<users.length; i++){
        if(user===users[i].username && pass===users[i].password){
            window.location.href = "./homePage.html";
            return;
        } else{
            console.log("wrong")
            if(!signupC.classList.contains("false")){
                signupC.classList.add("false")
            }
        }
    }          
}

