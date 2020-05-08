const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
	nom: String,
	type: String,
	image: String,
	quantite: Number,
	prix: Number,
	createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blogpost', blogpostSchema);