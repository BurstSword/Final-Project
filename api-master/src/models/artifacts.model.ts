import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

interface ArtifactSet extends Document {
    name: string,
    max_rarity: number,
    two_piece_bonus: string,
    four_piece_bonus: string
}


const artifactSchema = new Schema({
    name: { type: String },
    max_rarity: { type: Number },
    two_piece_bonus: { type: String },
    four_piece_bonus: { type: String }
},
    {
        timestamps: true
    })

export const ArtifactSet = mongoose.model<ArtifactSet>('Artifact', artifactSchema);