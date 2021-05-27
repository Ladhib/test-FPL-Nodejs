var express = require('express');
var router = express.Router();

var subjectModel = require('../model/subjectSchema')

router.post('/addSubject',(req, res)=> {

  console.log(req.body);

    const subject = new subjectModel({
            title:req.body.title,
            description:req.body.description,
            responses : {
                yes : 0 , 
                no : 0
            }

    })
    subject.save().then(createdSubject => {
        res.status(201).json({
            message: "subject added successfully",

        });
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
            message: "failed to create a product!"+error

        });
    });

  });



router.get("/getAllSubjects", function(req, res, next) {
    subjectModel.find().then(allSubjects=>{
      res.json(allSubjects)
    })
  });


  router.put('/updateSubject/:id', (req, res, next) => {
    console.log(req.body);
    subjectModel.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(y => {
        res.json(response)
      })
    })

module.exports = router;
