type ApiConfig = {
  baseUrl: string,
}

export type Config = {
  api: ApiConfig
}

export default {
  api: {
    baseUrl: 'https://rickandmortyapi.com/api',
  },
} as Config;
