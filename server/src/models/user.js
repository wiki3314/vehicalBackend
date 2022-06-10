import mongoose from 'mongoose';
import { v1 as uuidv1 } from 'uuid';

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  userId: { type: String, default: _ => uuidv1() },
  name: { type: String },
  email: {
    type: String,
    required: true,
    unique: true, // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
    match: [
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email',
    ],
  },
  password: { type: String },
  token: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
