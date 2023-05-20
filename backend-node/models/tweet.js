const {model, Schema} = require("mongoose");

const messageSchema = new Schema({
	description: String,
	like: Number,
	person: Schema.Types.ObjectId,
})

module.exports = model("tweet", messageSchema);