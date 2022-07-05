const inputPassword= document.querySelector("#input-password")
const inputpasswordConfirm = document.querySelector("#input-password-confirm")
const checkBoxShowPassword = document.querySelector("#checkbox-show-password");
const textError = document.querySelector(".text-error");
const emailError = document.querySelector(".email-error");
const inputPhoneNumber=document.querySelector("#input-phone-number");
const inputEmail = document.querySelector("#input-email");
checkBoxShowPassword.onchange=function(){
/*     if(this.checked){
        inputPassword.type="text"
    }else{
        inputPassword.type="password";
    } */
    //condicion?verdadero:falso
    this.checked?inputPassword.type="text":inputPassword.type="password";
}

inputpasswordConfirm.onkeyup=function(){
    // console.log(this.value);
    const password =inputPassword.value;
    const confirmPassword=this.value;
    if(password==""){
        alert("Debe completar el password para poder escribir en este input");
        this.value="";
        inputPassword.focus();
        return;
    }
    if(password!==confirmPassword){
        console.log("el password no coincide");
        textError.style.display="block";
    }else{
        textError.style.display = "none";
        console.log("el password coincide")
    }
}

/* inputPhoneNumber.onkeyup=function(){
    const valor=this.value;
    let newValue="";
    const caracteres=valor.split("");
    caracteres.forEach((caracter)=>{
        if(!isNaN(Number(caracter))){
            newValue+=caracter;
        }
    });
    this.value=newValue;
}; */
inputPhoneNumber.onkeyup=function(){
   this.value=this.value
    .split("")
    .filter(caracter=>!isNaN(Number(caracter)))
    .join("");
};

inputEmail.onkeyup=function(){
    const value=this.value;
/*     if(value.includes("@")){
        console.log("correo valido")
    }else{
        console.log("correo no valido")
    } */
    const regex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;

    console.log(regex.test(value));
    let validacion=regex.test(value);
    if(validacion){
        console.log("soy true");
        console.log(validacion);        
        emailError.style.backgroundColor = "red";
    }else{
        console.log("soy false");
        console.log(validacion);
        emailError.style.backgroundColor = "green";
    }
    // regex.test(value)?emailError.style.display="none":emailError.style.display="block";
}