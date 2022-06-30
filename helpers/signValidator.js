const Joi = require("joi");

//user validation

exports.validateUser = (user) => {
  const schema = Joi.object().keys({
    
    email: Joi.string().min(3).max(30).email().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(user);
};
