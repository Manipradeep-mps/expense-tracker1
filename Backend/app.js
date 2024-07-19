const express=require('express');
const mongose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
const PORT=8080;
require('dotenv').config()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors());
const URI=process.env.MONGO_URI
mongose.connect(URI);


const expense=require('./models/ExpenseSchema')
// expense.insertMany([ { 
//     title:"Gopal",
//     amount:2000,
//     date:"06/07/2023"},
//     {
//         title:"Gopal",
//         amount:2000,
//         date:"06/07/2023"
//     }
// ])
// .then(()=> console.log("Expense added"))
// .catch((err)=> console.log(err));

const userRoutes=require('./routes/userRoutes')
app.use('/auth',userRoutes)

app.get("/",async (req,res)=>{
    let data=await expense.find({})
    res.send(data);
})

app.post("/",(req,res)=>{
     let Title=req.body.title;
     let Amount=Number(req.body.amount);
     let Date=req.body.date;
     expense.create({
        title:Title,
        amount:Amount,
        date:Date
     })
     .then(()=>{
        res.send("Data created");
     })
     app.patch("/", async(req,res)=>{
        let Title=req.body.title;
        let Amount=req.body.amount;
        let data=await expense.updateOne({title:Title},{amount:Amount});
        res.send(data);
     })
})


app.listen(PORT,()=>{
    console.log("Server is Listening");
})