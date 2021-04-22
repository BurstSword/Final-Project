import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

interface Weapon extends Document {
    name: string
    type: string
    rarity: number
    baseAttack: number
    subStat: string
    passiveName: string
    passiveDesc: string
    location: string
}

const weaponSchema = new Schema({
    name: { type: String },
    type: { type: String },
    rarity: { type: Number },
    baseAttack: { type: Number },
    subStat: { type: String },
    passiveName: { type: String },
    passiveDesc: { type: String },
    location: { type: String },


},
    {
        timestamps: true
    })

export const Weapon = mongoose.model<Weapon>('Weapon', weaponSchema);