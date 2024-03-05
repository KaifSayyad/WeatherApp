import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    
        username: {
            type:String,
            required: true,
            unique: true
        },
        email: {
            type:String,
            required: true,
            unique: true
        },
        password: {
            type:String,
            required: true,
            unique: true
        },
        favorites: [{
            placeName : {type: String, required: true},
            latitude: {
                type: Number,
                required: true
            },
            longitude: {
                type: Number,
                required: true
            }
        }]
    })

    const User = mongoose.model('User', userSchema)

    export default User