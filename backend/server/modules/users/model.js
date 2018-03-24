import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Meetup', UserSchema);
