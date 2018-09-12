var mongoose = require("mongoose");
//Saving a reference to the Schema constructor.
var Schema = mongoose.Schema;

// Using Schema constructor, creating a new UserSchema ogject.
var Articleschema = new Schema({
	title: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	summary: {
		type: String,
		default: "Summary is not available."
	},
	img: {
		type: String,
		default: "/assets/images/rvatimes.jpg_LI.jpg"
	},
	issaved: {
		type: Boolean,
		default: false
	},
	status: {
		type: String,
		default: "Save Article"
	},
	created: {
		type: Date,
		default: Date.now
	},
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

Articleschema.index({title: "text"});

var Article  = mongoose.model("Article", Articleschema);
module.exports = Article;