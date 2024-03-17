// const a=require('fs');
// a.writeFile('newfile.txt','data is everywhere',(err)=>{
//     if(err)
//     console.log(err)
// else
// console.log("wrote a file");
//     a.readFile('newfile.txt','utf-8',(err,data)=>{
     
//         console.log(err);
   
//     console.log(data.toString());
//     })
   
// })
// a.appendFile('newfile.txt','appended content',(err,data)=>{
//     console.log(err,data);
    
// })
// const fun=()=>{
//     console.log("int y(100)");
// }
// const callback=(fun)=>{
//     console.log("data of fun");
//     console.log(fun());
   
// }
// callback(fun);
const a=require('fs')
a.writeFile('atext.txt','data is written',(err,data)=>{
console.log(err)
console.log(data);
a.readFile('atext.txt','utf-8',(err,data)=>{
    console.log(err)
    console.log(data.toString());
})
})
async function work(){
    let b=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    b=await b.json()
    console.log(b.completed);
}
work();  