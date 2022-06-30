const btnTest =document.querySelector("#btn-test");

btnTest.onclick=()=>{
    console.log("Es un click")
}

/* btnTest.onclick=function(){
    console.log("Es un click")
} */

const variableH1 = document.querySelector("#h1-test");
variableH1.onclick = ()=>{
    console.log("click desde el h1");
    variableH1.innerHTML="modificado con JS"
}

const users=[];

const form= document.querySelector("#form-store-user");

form.onsubmit=(event)=>{
    event.preventDefault();
    console.log(event.target);
    const formData=new FormData(event.target);
    const user={};
    for(let dato of formData.entries()){
        console.log("Key",dato[0]);
        console.log("value",dato[1]);
        user[dato[0]]=dato[1];
    }
    user.push(user);
}

