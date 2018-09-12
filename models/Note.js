var mongoose = require("mongoose");

//Saving a reference to the Schema constructor.
var Schema = mongoose.Schema;

// Using the Schema constructor, creating a new NoteSchema object.
var Noteschema = new Schema({
	title: {
		type: String,
	},
	body: {
		type: String,
	}
});

var Note = mongoose.model("Note", Noteschema);
module.exports = Note;