console.log("hello");
var m = parseInt(prompt("Enter the number of order of chess board:"));
 // this program makes prints the  0-1 pattern
   
  document.getElementById('lol').innerHTML=chesspattern(m);

   function chesspattern(m)
   {for(let i=1;i<=m;i++){
   
    for(let j=1,b='#',d='*';j<=m;j++){
          if(i%2!=0){
            if(j%2!=0)
           document.write(d+" ");
          else if(j%2==0)
          document.write(b+" ");
          }
          else if(i%2==0){
            if(j%2!=0)
            document.write(b+" ");
          else if(j%2==0)
          document.write(d+" ");
          }

    }


   document.write("<br>");
   }
  }