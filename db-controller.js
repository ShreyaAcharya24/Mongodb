const res = require("express/lib/response")
const UserModel = require ("./db-model")

exports.signupdb = function(req,res){

    let user = new UserModel({
        firstName:req.body.firstName,
        email:req.body.email,
        pwd:req.body.pwd
    })

user.save(function(err,data){
    if(err)
        res.json({data:err,msg:"Something went wrong",status:-1})
    else
        res.json({data:data,msg:"signup done",status:200})
})

}

exports.getAllUsers = function(req,res){

    UserModel.find(function (err,data) {

        if(err){
            res.json({data:err,msg:"smww",status:1})
        }
            else{
            res.json({data:data,msg:"User retrieved",status:200})
        }
        
    
    })

}