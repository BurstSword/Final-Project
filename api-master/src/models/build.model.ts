import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

interface Build extends Document {
    name: string,
    idUser: string,
    characterId: string,
    flowerId: string,
    featherId: string,
    watchId: string,
    gobletId: string,
    bandanaId: string,
    weaponId: string,
    flowerStat: string,
    bandanaStat: string,
    gobletStat: string,
    featherStat: string,
    watchStat: string,
}

const buildSchema = new Schema({
    name: { type: String },
    idUser: { type: Schema.Types.ObjectId, ref: 'User' },
    characterId: { type: Schema.Types.ObjectId, ref: 'Character' },
    flowerId: { type: Schema.Types.ObjectId, ref: 'ArtifactPart' },
    featherId: { type: Schema.Types.ObjectId, ref: 'ArtifactPart' },
    watchId: { type: Schema.Types.ObjectId, ref: 'ArtifactPart' },
    gobletId: { type: Schema.Types.ObjectId, ref: 'ArtifactPart' },
    bandanaId: { type: Schema.Types.ObjectId, ref: 'ArtifactPart' },
    weaponId: { type: Schema.Types.ObjectId, ref: 'Weapon' },
    flowerStat: { type: String },
    bandanaStat: { type: String },
    gobletStat: { type: String },
    featherStat: { type: String },
    watchStat: { type: String },
},
    {
        timestamps: true
    })

export const Build = mongoose.model<Build>('Build', buildSchema);