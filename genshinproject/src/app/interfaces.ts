export interface ResponseUser{
    status: number,
    message: string,
    user: User,
    token?:string,
    error?:string
}
export interface ResponseCharacter{
    status: number,
    message: string,
    characters: Character[],
    error?:string
}

export interface User{
    _id:string,
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