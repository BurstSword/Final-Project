import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'



interface ArtifactStat extends Document {
    type:string,
    stats: string[]
    
}
const artifactSchema = new Schema({
    type: { type: String },
    stats: { type: Array }
    

})

export const ArtifactStat = mongoose.model<ArtifactStat>('ArtifactStat', artifactSchema);