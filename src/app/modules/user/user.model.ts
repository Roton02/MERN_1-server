import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';

const userSchemaModel = new Schema<Tuser>(
  {
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
      default: true,
    },
    role: {
      type:String ,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type:String ,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const user = model<Tuser>('User', userSchemaModel);

export default user;
