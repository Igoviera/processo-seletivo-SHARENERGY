import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
    match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    maxlength: 20
  },
  address: {
    type: String,
    required: true,
    maxlength: 255
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
    maxlength: 15
  }
})