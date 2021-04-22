import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

interface Enemy extends Document {
    id: string,
    name: string,
    description?: string,
    region: string,
    type: string,
    elements: string[],
    artifacts:Artifacts[]
    family: string,
    faction: string,
    drops: Drop[],
    elemental_descriptions: ElementalDescription[],
    descriptions:Description[],
    mora_gained:number
}

interface Drop {
    name: string,
    rarity: number,
    minimum_level: number
}

interface Artifacts {
    name: string
    rarity: string
}

interface ElementalDescription {
    element: string,
    description: string
}

 interface Description {
    name: string
    description: string
  }

const enemySchema = new Schema({
    id: { type: String },
    name: { type: String },
    description: { type: String },
    region: { type: String },
    type: { type: String },
    elements: { type: Array },
    artifacts:{ type: Array },
    family: { type: String },
    faction: { type: String },
    drops: { type: Array },
    elemental_descriptions: { type: Array },
    descriptions:{ type: Array },
    mora_gained:{ type: Number }
},
    {
        timestamps: true
    })

export const Enemy = mongoose.model<Enemy>('Enemy', enemySchema);