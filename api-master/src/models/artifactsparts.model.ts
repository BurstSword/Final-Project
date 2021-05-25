import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'



interface ArtifactPart extends Document {
    name: string,
    idSet: string,
    type: string
}
const artifactSchema = new Schema({
    name: { type: String },
    idSet: { type: Schema.Types.ObjectId, ref: 'Artifact' },
    type: { type: String }

})

export const ArtifactPart = mongoose.model<ArtifactPart>('ArtifactPart', artifactSchema);