/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcryptjs';


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

userSchemaModel.pre('save', async function () {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt));
});

userSchemaModel.post('save', function (doc, next) {
  doc.password = '';

  next();
});


const user = model<Tuser>('User', userSchemaModel);

export default user;
