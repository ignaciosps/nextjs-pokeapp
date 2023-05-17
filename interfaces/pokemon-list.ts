export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SmallPokemon[];
}
export interface PokemonListResponseByName {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
}

export interface SmallPokemon {
  name: string;
  url: string;
  id: number;
  img: string;
}

export interface Result {
  name: string;
  url: string;
}
