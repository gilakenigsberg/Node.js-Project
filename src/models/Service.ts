import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
  servicename: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const service = model('service', serviceSchema);

export default service;
