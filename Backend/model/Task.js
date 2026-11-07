import mongoose from "mongoose"

const taskSchema= new mongoose.Schema(
    {
        task:{
            type:String,
            trim:true,
            required:true,
            minLength:3,
            maxLength:250,
        },
        status:{
            type:Boolean,
            default:false,
        },
        user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
        
    },{timestamps:true},
)

const taskModel = mongoose.model("Task",taskSchema)   //first parameter is to refernce todo model, third parameter is ued to create custom model in databse

export default taskModel