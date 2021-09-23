const Fitness = require("../models/fitness");

module.exports = function(app){
    app.get("/api/fitness", function(req,res){
        Fitness.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    });

    app.post("/api/fitness",function (req,res){    
        Fitness.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/fitness/range",function(req,res){  
        Fitness.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    app.post("/api/fitness/range",function (req,res){    
        Fitness.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/fitness/:id",({body,params},res)=>{   
        Fitness.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}