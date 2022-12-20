require('dotenv').config();
const mongoose = require("mongoose");
let url = "mongodb+srv://nhatvuong99:nhatvuong99@cluster0.gzvqgbc.mongodb.net/hvnSocialNetwork?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);

async function connect() {
	try {
		await mongoose.connect(url);
		console.log("database connected");
	} catch (error) {
		console.log(error);
	}
}
module.exports = { connect }