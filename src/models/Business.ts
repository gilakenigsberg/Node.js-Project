import { Schema, model } from 'mongoose';

const businessSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: String, required: true },
});

const Business = model('Business', businessSchema);

export default Business;
