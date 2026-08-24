"use strict";
import Joi from "joi";

export const empresaQueryValidation = Joi.object({
  id:
  Joi.number()
  .integer()
  .positive()
  .messages({
    "number.base": "El id debe ser un número",
    "number.positive": "El id debe ser positivo",
  }),
  rutEmpresa: 
  Joi.string()
  .min(8)
  .max(12)
  .messages({
    "string.min": "El rut debe tener al menos 8 caracteres",
    "string.max": "El rut no puede tener más de 12 casracteres",
  }),
})
  .or("rutEmpresa")
  .messages({
    "object.missing": "Debes enviar de rutEmpresa",
  });

export const empresaBodyValidation = Joi.object({
  nombre: 
  Joi.string()
  .min(3)
  .max(255)
  .required()
  .messages({
   "string.empty": "El nombre no puede estar vacío",
    "string.min": "El nombre debe tener al menos 3 caracteres",
    "any.required": "El nombre es obligatorio",
  }),
  direccionEmpresa: 
  Joi.string()
  .min(5)
  .max(255)
  .required()
  .messages({
    "string.empty": "La dirección no puede estar vacía",
    "any.required": "La dirección es obligatoria",
  }),
  descripcionEmpresa: 
  Joi.string()
  .min(5)
  .max(255)
  .required()
  .messages({
    "string.empty": "La descripción no puede estar vacía",
    "any.required": "La descripción es obligatoria",
  }),
  rutEmpresa: 
  Joi.string()
  .min(8)
  .max(12)
  .required()
  .messages({
    "string.empty": "El rut no puede estar vacío",
    "any.required": "El rut es obligatorio",
  }),
  emailEmpresa: 
  Joi.string()
  .email()
  .max(255)
  .required()
  .messages({
    "string.email": "El email no es válido",
"any.required": "El email es obligatorio",
  }),
});