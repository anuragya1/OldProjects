const Express=require('express'); 
const app=Express();
const cors=require('cors');
const fs=require('fs');
const port=3002;
app.use(cors());
app.use(Express.static('public'));
app.get('/get',(req,res)=>{
    console.log('hey there its a get request');
   // res.send('hello mfs')
   const data =fs.readFileSync('./atext.txt','utf-8');
   res.send(data);
})
app.get('*',(req,res)=>{
    console.log('hey the');
    res.send('404');
})
app.post('/demo',(req,res)=>{
    console.log(req.body);
    res.send('hello post mfs');
})

app.listen(port,()=>{
    console.log('server is running at',port);
})

