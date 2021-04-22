import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

interface Character extends Document {
    name: string,
    vision: string,
    weapon: string,
    nation: string,
    affiliation: string,
    rarity: number,
    constellation: string
    birthday: string,
    description: string
    skillTalents: SkillTalents[],
    passiveTalents: PassiveTalents[],
    constellations: Constellations[],
    vision_key: string,
    weapon_type: string
}

interface SkillTalents {
    name: string,
    unlock: string,
    description: string,
    type: Direction
}

interface PassiveTalents {
    name: string,
    unlock: string,
    description: string,
    level: number
}

interface Constellations {
    name: string,
    unlock: string,
    description: string,
    level: number
}
enum Direction {
    NA = "NORMAL_ATTACK",
    ES = "ELEMENTAL_SKILL",
    EB = "ELEMENTAL_BURST",

}
const characterSchema = new Schema({
    name: { type: String },
    vision: { type: String },
    weapon: { type: String },
    nation: { type: String },
    affiliation: { type: String },
    rarity: { type: String },
    constellation: { type: String },
    birthday: { type: String },
    description: { type: String },
    skillTalents: { type: Array },
    passiveTalents: { type: Array },
    constellations: { type: Array },
    vision_key: { type: String },
    weapon_type: { type: String }
},
    {
        timestamps: true
    })

export const Character = mongoose.model<Character>('Character', characterSchema);