import { defineStore } from 'pinia';
import createParamsWithLocation from '@/shared/utils/create-params-with-location';
import cleaningParams from '@/shared/utils/cleaning-params';
import createURL from '@/shared/utils/create-url';
import updateHistory from '@/shared/utils/update-history';
import type { PaginationState } from '@/entities/pagination';

export type CharacterAliveStatus = 'Alive' | 'Dead' | 'unknown';
type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

type StoreStatus = 'loading' | 'error' | 'success' | 'initial';

type CharacterParams = {
  name: string,
  status: CharacterAliveStatus,
};

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
  params?: Partial<CharacterParams> | null,
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
  params: null,
};

export const useCharacterStore = defineStore('character', {
  state: () => initialState,
  actions: {
    async init() {
      const { page, ...params } = createParamsWithLocation();

      await this.setCurrentPage(<number>page || this.pagination.currentPage, false);
      await this.setParams(params, false);

      await this.load();
    },
    updateParams() {
      const params = cleaningParams({
        ...(this.pagination.currentPage && { page: this.pagination.currentPage }),
        ...(this.params && { ...this.params }),
      });

      updateHistory(createURL(params));
    },
    async setCurrentPage(page: number, load: boolean = true) {
      this.pagination.currentPage = page;

      this.updateParams();

      if (load) await this.load();
    },
    async setParams(params: Partial<CharacterParams>, load: boolean = true) {
      this.params = cleaningParams({ ...this.params, ...params });

      this.updateParams();

      if (load) await this.load();
    },
    async load() {
      try {
        this.status = 'loading';
        const params = cleaningParams({
          ...(this.pagination.currentPage && { page: this.pagination.currentPage }),
          ...(this.params && { ...this.params }),
        });

        const response = await this.services.api.req({
          url: '/character',
          ...(params && { params }),
        });

        this.data = await response.data.results;
        this.info = await response.data.info;

        this.pagination.maxPages = response.data.info.pages || this.pagination.maxPages;

        this.status = 'success';
      } catch (e) {
        console.log(e);
        this.status = 'error';
      }
    },
  },
});
