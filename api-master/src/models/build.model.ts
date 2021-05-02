import { Schema, Document } from 'mongoose'
import mongoose from 'mongoose'

interface Build extends Document {
    name: string,
    idUser: string
    flower: ArtifactBuild,
    feather: ArtifactBuild,
    watch: ArtifactBuild,
    goblet: ArtifactBuild,
    bandana: ArtifactBuild,
    weapon: string

}
interface ArtifactBuild {
    idArtifact: string,
    stat: string
}
const buildSchema = new Schema({
    name: { type: String },
    idUser: { type: Object },
    flower: { type: Object },
    feather: { type: Object },
    watch: { type: Object },
    goblet: { type: Object },
    bandana: { type: Object },
    weapon: { type: String }
},
    {
        timestamps: true
    })

export const Build = mongoose.model<Build>('Build', buildSchema);