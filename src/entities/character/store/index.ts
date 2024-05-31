import axios from 'axios';
import { defineStore } from 'pinia';

type CharacterAliveStatus = 'Alive' | 'Dead' | 'unknown';
type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

type StoreStatus = 'loading' | 'error' | 'success' | 'initial';

type ResponseInfo = {
  count?: number,
  pages?: number,
  next?: string,
  prev?: string,
}

export type Character = {
  id: number,
  name: string,
  status: CharacterAliveStatus,
  species: string,
  type: string,
  gender: CharacterGender,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: [
    string
  ],
  url: string,
  created: string,
}

interface CharacterState {
  status: StoreStatus,
  data: Character[],
  info?: ResponseInfo,
}

const initialState: CharacterState = {
  status: 'initial',
  data: [],
  info: {},
};

export const useCharacterStore = defineStore('character', {
  state: () => initialState,
  actions: {
    async load(page?:number) {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?${page && `page=${page}`}`);
      this.data = await response.data.results;
      this.info = await response.data.info;
    },
  },
});
