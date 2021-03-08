export interface PokemonInfo {
  name: string;
  id: string;
  types?: (Type)[];
  color?: string;
  photo?: string;
  stats?: (Stats)[]
  abilities?: (Abilities)[];
  sprites?: (any)[];
}

export interface Abilities {
  name: string;
  url: string;
}

export interface Sprites {
  backDefault: string;
  backFemale: string;
  backShiny: string;
  backShinyFemale: string;
  frontDefault: string;
  frontFemale: string;
  frontShiny: string;
  frontShinyFemale: string;
}

export interface Stats {
  baseStat: number;
  name: string;
  url: string;
  effort?: number;
  icon?: string;
  description?: string;
  percent?: string;
}

export interface Type {
  name: string;
  url: string;
  backgroundColor?: string;
  fontColor?: string;
}