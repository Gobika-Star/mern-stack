const mongoose=require("mongoose");
const  validator=require("validator");
const bcrypt=require("bcrypt");
const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:[true,"Name is required"],
        trim:true,
    },
    email:
    {
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email alerady exists use another"],
        lowercase:true,
        validate:[validator.isEmail,"please enter a corret email"],

    },
    role:
    {
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    password:
    {
        type:String,
        required:[true,"Password is required"],
        minlength:[8,"Password must be at least 8 characters"],
        select:false,
    },
    passwordConfirm:
    {
        type:String,
        required:[true,"Confirm password is required"],
        validate:
        {
            validator:function(el)
            {
                return el===this.password
            },
            message:"password and confirm password are not same"
        },
    },
    
},
{
    timestamps:true,
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm=undefined;
    next();
});

userSchema.methods.correctPassword=async function(candidatePassword,userPassword)
{
    return await bcrypt.compare(candidatePassword,userPassword);
};

const User=mongoose.model("User",userSchema);
module.exports=User;








































// // const fs=require("fs");
// const mongoose=require("mongoose");

// const userSchema=new mongoose.Schema({
//     name:
//     {
//         type:String,
//         required:[true,"Name is required"],
//         trim: true,
//         minlength:[10,"Name must be at least 10 characters"],
//     },
//     id: {
//         type:Number,
//     },
   
//     age: {
//         type:Number,
//     },
//     email: {
//         type:String,
//     },
//     password: {
//         type:String,
//     },
//     collegeName: {
//         type:String,
//     },

// });
// const User=mongoose.model("User",userSchema);
// module.exports=User;
