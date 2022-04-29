let send=document.querySelector("#send")
let account=document.querySelector("#account")
let password=document.querySelector("#password")

const reEmail=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

send.addEventListener("click", function(){
 let accountValue=account.value;
 let passwordValue=password.value;
 console.log(accountValue, passwordValue)
   if(accountValue===""){
       alert("請輸入帳號")
       return;
       }
   if(!reEmail.test(accountValue)){
       alert("請輸入有效email")
       return;
       }
   if(passwordValue===""){
       alert("請輸入密碼")
       return;
       }
})