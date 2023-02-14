const express=require('express');
const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/register";
mongoose.connect(url,{useNewUrlParser: true, 
    useUnifiedTopology: true},(err)=>{
    if(err)
    console.log(err);
    else
    console.log("connected");
})

const app=express();

app.set('view engin','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

const personschema=new mongoose.Schema({
    name:String,
    Event_Name:String,
    Email:String,
    Ph_num:Number,
    T_id:String
});

const person=mongoose.model('Person',personschema);

app.get('/',(req,res)=>{
    res.render("index.html")
})
app.post('/',(req,res)=>{
let newPer=new person({
    name:req.body.name,
    Event_Name:req.body.ename,
    Email:req.body.email,
    Ph_num:req.body.tel,
    T_id:req.body.tid
});

newPer.save((err,data)=>{
    if(err)
    console.log("error");
    else
    console.log("success");
});
   
res.render("index.html")

})
app.get('/form',(req,res)=>{
    res.render("form.html")
})
app.listen(3000,()=>{
    console.log("listening");
});

