import Joi from '@hapi/joi';

const Validation = {};

const addSchema = Joi.object({
  type: Joi.number().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  make: Joi.string().required(),
  price: Joi.string().required(),
  registration: Joi.string().required(),
});

const editSchema = Joi.object({
  // type: Joi.number().required(),
  model: Joi.string().required(),
  color: Joi.string().required(),
  make: Joi.string().required(),
  price: Joi.string().required(),
  registration: Joi.string().required(),
});

Validation.add = async req => {
  try {
    const value = await addSchema.validateAsync(req.body);
    return { err: null, value };
  } catch (err) {
    return { err, value: null };
  }
};

Validation.edit = async req => {
  try {
    const value = await editSchema.validateAsync(req.body);
    return { err: null, value };
  } catch (err) {
    return { err, value: null };
  }
};

export default Validation;
