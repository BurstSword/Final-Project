import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

 interface Nation extends Document {
    name: string
    element: string
    archon: string
    controllingEntity: string
    description: string
  }
  
const nationSchema = new Schema({
    name: { type: String },
    element: { type: String },
    archon: { type: String },
    controllingEntity: { type: String },
    description: { type: String },
   
},
    {
        timestamps: true
    })

export const Nation = mongoose.model<Nation>('Nation', nationSchema);