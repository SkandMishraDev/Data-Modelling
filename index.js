import express from "express"

const app = express();
const port = process.env.Port || 3000;

app.get("/",(req,res)=>{
    res.send("this is my server")
})

app.get("/api/jokes",(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },{
            id:2,
            title:'2 joke',
            content:'This is a joke'
        },{
            id:3,
            title:'3 joke',
            content:'This is a joke'
        },{
            id:4,
            title:'4 joke',
            content:'This is a joke'
        },{
            id:5,
            title:'5 joke',
            content:'This is a joke'
        }
    ];
    res.send(jokes);
});

app.listen(port,()=>{
    console.log(`Server is runnning on ${port}`)
})