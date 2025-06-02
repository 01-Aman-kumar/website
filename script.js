let inputElement=document.querySelector("#input")

let btn=document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(btn.innerHTML=="Show"){
    inputElement.type='text';
    btn.innerHTML="Hide";
    }else{
        inputElement.type='password';
        btn.innerHTML="Show"; 
    }
})

//random passwordgenerator
let button=document.querySelector(".gbtn");
let parah=document.querySelector(".parah");
let parahText=parah.textContent;

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let digit="0123456789";
    let alpha="abcdefghijklmnopqrstuvwxyz";
    let symbol="@$&!_";
    let str=digit+alpha+symbol;
    let sum="#"
    for(let i=0;i<12;i++){
        let random=Math.floor(Math.random()*str.length)
        
        sum+=str[random];
    }
    parah.innerHTML=`${sum}`

})

// show and hide model
let login=document.querySelector(".login");
let model=document.querySelector(".model")
login.addEventListener("click",()=>{
    model.classList.toggle("hidemodel")
})
let rmbtn=document.querySelector(".rm");
rmbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    model.classList.add("hidemodel")
})