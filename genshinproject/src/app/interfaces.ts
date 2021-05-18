export interface ResponseUser {
    status: number,
    message: string,
    user: User,
    token?: string,
    error?: string
}
export interface ResponseCharacter {
    status: number,
    message: string,
    characters: Character[],
    error?: string
}
export interface ResponseArtifact {
    status: number,
    message: string,
    artifacts: ArtifactSet[],
    error?: string
}
export interface ResponseArtifactPart {
    status: number,
    message: string,
    artifacts: ArtifactPart[],
    error?: string
}

export interface ResponseArtifactStat {
    status: number,
    message: string,
    artifacts: ArtifactStat[],
    error?: string
}
export interface ResponseEnemies {
    status: number,
    message: string,
    enemies: Enemy[],
    error?: string
}


export interface Enemy {
    id: string,
    name: string,
    description?: string,
    region: string,
    type: string,
    elements: string[],
    artifacts: Artifacts[]
    family: string,
    faction: string,
    drops: Drop[],
    elemental_descriptions: ElementalDescription[],
    descriptions: Description[],
    mora_gained: number
}

export interface Drop {
    name: string,
    rarity: number,
    minimum_level: number
}

export interface Artifacts {
    name: string
    rarity: string
}

export interface ElementalDescription {
    element: string,
    description: string
}

export interface Description {
    name: string
    description: string
}

export interface User {
    _id: string,
    username: string,
    email?: string,
    password: string,
}

export interface Character {
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

export interface Weapon {
    name: string
    type: string
    rarity: number
    baseAttack: number
    subStat: string
    passiveName: string
    passiveDesc: string
    location: string
}

export interface ResponseWeapon {
    status: number,
    message: string,
    weapons: Weapon[],
    error?: string
}


export interface ArtifactSet {
    _id: string,
    name: string,
    max_rarity: number,
    two_piece_bonus: string,
    four_piece_bonus: string
    flowerName: string
}

export interface ArtifactPart {
    _id: string,
    name: string,
    idSet: string,
    type: string,
    stats?: string[]
}
export interface ArtifactStat {
    _id: string,
    type: string,
    stats: string[]
}



export interface SkillTalents {
    name: string,
    unlock: string,
    description: string,
    type: Direction
}

export interface PassiveTalents {
    name: string,
    unlock: string,
    description: string,
    level: number
}

export interface Constellations {
    name: string,
    unlock: string,
    description: string,
    level: number
}
export enum Direction {
    NA = "NORMAL_ATTACK",
    ES = "ELEMENTAL_SKILL",
    EB = "ELEMENTAL_BURST",

}