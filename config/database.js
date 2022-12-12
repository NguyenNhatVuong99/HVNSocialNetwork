require('dotenv').config();
const mongoose = require("mongoose");
let url = process.env.MONGODB_URL || 'mongodb://localhost:27017/nhatvuong99'
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