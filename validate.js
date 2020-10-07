const Joi = require('@hapi/joi')

const registerValidation = (body) => {
    const schema = {
        name: Joi.string().min(1).required(),
        email: Joi.string().min(2).email().required(),
        password: Joi.string().min(2).required()
    }
    return Joi.validate(body, schema)
}
module.exports = registerValidation;