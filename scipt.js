
// const body=document.getElementsByTagName("body")
const btn=document.getElementById("btn")
const numberInput=document.getElementById("number")
const passwordInput=document.getElementById("password")
const koz=document.getElementById("koz")
const box=document.getElementById("box")
const ota=document.getElementById("ota")
const ortga=document.getElementById("ortga")
const ism=document.getElementById("ism")
const energy=document.getElementById("energy")
const coin=document.getElementById("coin")


localStorage.setItem("ism","Abduvahob Musayev")
localStorage.setItem("gurux","F2 1944")
localStorage.setItem("coin","7999 coin")



koz.addEventListener("click",()=>{
    if(passwordInput.type=="password"){
        passwordInput.type="text";
    }else{
        passwordInput.type="password";
    }
});


passwordInput.addEventListener("input",()=>{
    if(numberInput.value.length>3 && passwordInput.value.length>3){
        btn.disabled=false
        btn.style.backgroundColor="#f0400f";
    }else{
        btn.disabled=true
        btn.style.backgroundColor="#f7714c";
    }
    
})

btn.addEventListener("click",()=>{
    if(passwordInput.value=="1234" && numberInput.value=="mars"){
       box.style.display="none"
    }else{
        alert("password or login error!!")
    }
});

ortga.addEventListener("click",()=>{
      box.style.display="block"
            ota.style.display="none"
})

passwordInput.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        if(passwordInput.value=="1234" && numberInput.value=="mars"){
            box.style.display="none"
            ota.style.display="block"
         }else{
             alert("password or login error!!")
         }
    }
})



