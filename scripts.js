//const pw1= document.getElementById("password1");
//const pw2= document.getElementById("password2");
const loginBut= document.getElementById("subBut");
const formVar=document.querySelector("form");
formVar.addEventListener("submit", checkEqual);

checkEqual(form){
    pw1=form.passwordBox;
    pw2=form.passwordConfirm;
    if (password1 != password2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    } else {
        alert("password match");
        return true;
    }

    
}