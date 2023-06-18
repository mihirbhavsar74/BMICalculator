const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmiCalculator.html",(req,res)=>{
  const weight=req.body.weight;
  const height=req.body.height;
  const BMI=weight/height*height;
  res.send(`Your BMI is ${BMI}`);
})

app.listen(3000,()=>{
console.log('Server Listening at port 3000');

})