import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'



interface ArtifactPart extends Document {
    name: string,
    stats: string[],
    idSet: string
}
const artifactSchema = new Schema({
    name: { type: String },
    stats: { type: Array },
    idSet: { type: String },

})

export const ArtifactPart = mongoose.model<ArtifactPart>('ArtifactPart', artifactSchema);