import Joi from 'joi';

const validate = {
  validateBody: (payload) => {
    const schema = Joi.object().keys({
      nome: Joi.string().min(3).required(),
      status: Joi.string()
    });

    const result = schema.validate(payload);
    return result;
  }
}

export default validate;
