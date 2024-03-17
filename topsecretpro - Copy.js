console.log("hello there ");
let arr=["a","t","l","a","s"];
console.log(arr[Math. floor(Math.random() * arr. length)]);
let user=document.getElementById("user_input");
let computer=document.getElementById("computer_output");
document.getElementById("button").addEventListener("click", function () {
   if(user.value ==="anurag"){
    computer.innerHTML="<p>hello anurag how are you</p>";
   }
   else{
      computer.innerHTML="<p>oi oi get out of here</p>";
   }
  });
