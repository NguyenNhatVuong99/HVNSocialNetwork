const Joi = require('joi');
const validator = (data) => {
	let validator = Joi.object({
		title: Joi.string().required().messages({
			"string.required": "Vui lòng tiêu đề",
		}),
		description: Joi.string().required().messages({
			"string.required": "Vui lòng nhập mô tả"
		}),

	})
	return validator.validate(data)
}

module.exports = {validator}