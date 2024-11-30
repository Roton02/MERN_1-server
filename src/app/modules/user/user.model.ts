import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';

const userSchemaModel = new Schema<Tuser>({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  needsPasswordChange: {
    type: Boolean,
    required: true,
  },
  role: {
    enum: ['admin', 'student', 'faculty'],
    required: true,
  },
  status: {
    enum: ['in-progress', 'blocked'],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default : false
  },
}, {
  timestamps : true 
});

const user = model<Tuser>('User', userSchemaModel);

export default user;
