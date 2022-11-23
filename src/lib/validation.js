import Joi from "joi";

export const LoginSchema=Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required()
})

export const RegisterSchema=Joi.object({
    username:Joi.string().min(2).max(32).required(),
    fulname:Joi.string().min(2).max(32).required(),
    password:Joi.string().min(4).max(64).required(),
    phone:Joi.string().required(),
    region:Joi.string().required(),
})




