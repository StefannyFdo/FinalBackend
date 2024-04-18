
let bidRecord = require('../models/bids.model');

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Bids = require("./bids.model");

const artRecordSchema = new Schema({
    artName: { type: String},
    serial : {type: Number},
    src : {type:String, required:true},
    alt : {type:String},
    bids : [{ user: { type: String, required:true}, bid: {type:Number, required:true}}]
   
});

const ArtRecord = mongoose.model("ArtRecord", artRecordSchema);
module.exports = ArtRecord;


//bids : [{ user: { type: String, required:true},
   // bid: {type:Number, required:true}}]