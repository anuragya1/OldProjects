const path = 'D:\\web\\backendLearn';
const fun = (path) => {
    const fs = require('fs');
fs.readdir(`${path}`,(err,files)=>{
    if(err)
    console.log(err)
   else
    console.log(files);
    
});
}

fun(path);