const Joi = require("joi");

//todo validation

exports.validateTodos = (todo) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3).max(30),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  return schema.validate(todo);
};
