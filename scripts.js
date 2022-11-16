//const pw1= document.getElementById("password1");
//const pw2= document.getElementById("password2");
//const loginBut= document.getElementById("subBut");
//const formVar=document.querySelector("form");
//formVar.addEventListener("submit", checkEqual);


//checks if passwords match
function checkEqual(form){
    pw1=form.passwordBox.value;
    pw2=form.passwordConfirm.value;
    if (pw1 != pw2) {
        alert ("\nPassword did not match: Please try again...");
        return false;
    } else {
        alert("password match");
        return true;
    }

    
}