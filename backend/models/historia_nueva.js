const { model, Schema } = require("mongoose");

const newStorySchema = new Schema(
{

picture: {
    type: String,
    required: true
}, 

title: {
    type: String, 
  
},

description: {
    type: String
 
}


},
{timestamps: false, versionKey: false}


)