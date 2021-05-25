import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

export  interface User extends Document {
    username: string,
    email: string,
    password: string
    
}
const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String }
    
},
    {
        timestamps: true
    });

// Any request that a user collects from the database modifies the object it returns
userSchema.method("toJSON", function (this: any) {
    // In this case there is mongo data that I don't need
    const {
      __v,
      password,
      createdAt,
      updatedAt,
      ...object
    } = this.toObject();
    
    return object;
  });


export const User = mongoose.model<User>('User', userSchema);