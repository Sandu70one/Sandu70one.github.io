var users =[
    {
        username : "test",
        password : "123456789"
    },
]

// making two tabs 
const tabs = document.querySelectorAll('[data-tab-value]')
        const tabInfos = document.querySelectorAll('[data-tab-info]')
  
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(tab.dataset.tabValue);
                    
                tabInfos.forEach(tabInfo => {
                    tabInfo.classList.remove('active')
                })
                target.classList.add('active');
            })
        })

//register new users
function register(event){
    //stop the form refreshing
    event.preventDefault();

    var newUser=document.getElementById("Nuser").value;
    var newPass=document.getElementById("Npass").value;
    //new object for the new user
    var newClient={
        username : newUser,
        password : newPass
    }
    //registration conditions
    for(i=0; i<users.length; i++){
        if(newUser ==""){
            alert("please first give a user name");
            return
        }else if(newUser === users[i].username){
            alert("this username is already taken");
            return
        }else if(newPass== ""){
            alert("password can't be empty");
            return
        }else if( newPass.length<5){
            alert("password should contain at least 5 characters");
            return
        }   
    }

    //push the new object in to the users array   
    users.push(newClient)

    //reset form for new register
    document.forms[0].reset();
    
    //saving in the local storage
    var json =  JSON.stringify(users);
    localStorage.setItem("users", json);
    console.log(users)

    //display users
    var li = document.createElement("li");
    var text = document.createTextNode(newUser);
    li.appendChild(text);
    document.getElementById("myUl").appendChild(li);


}