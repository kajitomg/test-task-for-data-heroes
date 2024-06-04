import { defineStore } from 'pinia';
import type { PaginationState } from '@/entities/pagination';

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
  pagination: PaginationState,
  info?: ResponseInfo,
}

const initialState: CharacterState = {
  status: 'initial',
  data: [],
  pagination: {
    currentPage: 1,
    maxPages: 1,
    pages: [],
  },
  info: {},
};

export const useCharacterStore = defineStore('character', {
  state: () => initialState,
  actions: {
    async load(props?:{page?:number, url?: string}) {
      try {
        this.status = 'loading';

        const response = await this.services.api.req({
          url: '/character',
          ...(props?.page && { params: { page: props.page } }),
        });

        this.data = await response.data.results;
        this.info = await response.data.info;

        this.pagination.currentPage = props?.page || this.pagination.currentPage;
        this.pagination.maxPages = response.data.info.pages || this.pagination.maxPages;

        this.status = 'success';
      } catch (e) {
        console.log(e);
        this.status = 'error';
      }
    },
  },
});
