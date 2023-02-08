var name = window.prompt ("what is yo name foo?")
window.alert ('whats up, ' + name);


let loggedIn = false;

while(!loggedIn){
    var userName = prompt('Username:');
var passWord = prompt('Password:');


if (userName == 'black123' && passWord == '12345678'){
    alert("What's up foo, where you been, " + userName + "?, ");
loggedIn = true;} else {
    alert("Wrong username/password foo!");
}


for(let logInAttempts = 0; logInAttempts < 3; logInAttempts++)
{
    alert("Now you are locked out foo")
}
}