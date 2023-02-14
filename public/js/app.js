const express=require('express');
// const mongoose=require('mongoose');
// const url="mongodb://127.0.0.1:27017/moviesapp";
// mongoose.connect(url,{useNewUrlParser: true, 
//     useUnifiedTopology: true},(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("connected");
// })
const app=express();

app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(3000,()=>{
    console.log("listening");
});

// const movieSchema=new mongoose.Schema({

//     title:String,
//     year:Number,
//     rating:Number,

// });

// const movies=mongoose.model('Movie',movieSchema);

// movies.insertMany([{title:"sudeep",year:1999,rating:9},
//     {title:"sudeep 2",year:1998,rating:8},
//     {title:"sudeep 3",year:1997,rating:7}]).then(()=>{
//         console.log("success");
//     })
