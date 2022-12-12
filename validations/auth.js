const Joi = require('joi');
const registerValidator = (data) => {
	let registerRule = Joi.object({
		firstName: Joi.string().required().messages({
			"string.required": "Vui lòng nhập tên"
		}),
		lastName: Joi.string().required().messages({
			"string.required": "Vui lòng nhập tên"
		}),
		email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
			"string.required": "Vui lòng nhập email",
			"string.email": "Email không đúng định dạng"
		}),
		// .pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))
		password: Joi.string().label('password').required().messages({
			"string.required": "Vui lòng nhập password",
			"string.pattern": "Password không đúng định dạng"
		}),
		confirmPassword: Joi.any().equal(Joi.ref('password'))
			.required()
			.label('repeat password')
			.messages({ 'any.only': '{{#label}} không trùng' })

	})
	return registerRule.validate(data)
}
const loginValidator = (data) => {
	let loginRule = Joi.object({
		email: Joi.string().required().email().messages({
			"string.required": "Vui lòng nhập email",
			"string.email": "Email không đúng định dạng"
		}),
		password: Joi.string().required().messages({
			"string.required": "Vui lòng nhập password",
		}),
	})
	return loginRule.validate(data)
}
module.exports = { registerValidator, loginValidator }