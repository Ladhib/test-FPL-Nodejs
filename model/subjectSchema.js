var mongoose = require('mongoose')
   var Schema = mongoose.Schema

   const subjectModel = new Schema ({

    title: {type:String},
    description : {type:String},
    responses : {
        yes : {type : Number},
        no : {type : Number}

    },



   })
 module.exports=mongoose.model("subjectModel", subjectModel)
