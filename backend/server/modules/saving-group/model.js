import mongoose, { Schema } from 'mongoose';

const SavingGroupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  payment: {
    type: Number,
    required: true,
    integer: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Meetup', SavingGroupSchema);
