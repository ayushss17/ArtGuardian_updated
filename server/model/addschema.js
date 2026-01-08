import mongoose from "mongoose";

const addschema = new mongoose.Schema({
    artistaddress: {
        type:String,
        required:true
    },
    artist: {
        type:String,
        unique:false
    },
    title: {
        type:String,
        required:true
    },
    bigtitle: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    Link1: {
        type:String,
        required:true
    }
    ,Link2: {
        type:String,
    }
})

const addItem = mongoose.model('art',addschema);

export default addItem;