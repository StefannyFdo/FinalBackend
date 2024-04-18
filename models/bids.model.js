const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    user: { type: String, required:true},
    bid: {type:Number, required:true}
});

const bidRecord = mongoose.model("BitRecord", bidSchema);
module.exports = bidRecord;