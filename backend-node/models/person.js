const {model, Schema} = require("mongoose");

const messageSchema = new Schema({
	name: String,
	age: Number,
})

module.exports = model("person", messageSchema);