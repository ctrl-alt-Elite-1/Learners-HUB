const express=require('express');

const app=express()


app.post("user/signup",function(req,res){


    res.json({
        message:""
    })
})



app.post("user/signup",function(req,res){


    res.json({
        message:""
    })
})




app.post("/user/signup",function(req,res){


    res.json({
        message:""
    })
})



app.post("/user/signin",function(req,res){


    res.json({
        message:""
    })
})


app.get("/user/purchases",function(req,res){


    res.json({
        message:""
    })
})


app.post("/course/purchase",function(req,res){


    res.json({
        message:""
    })
})

app.get("/courses",function(req,res){


    res.json({
        message:""
    })
})




app.listen(3000);