import type { Config } from '@/config';
import APIService from '@/shared/services/api';

class Services {
  private readonly config: Config;

  private _api?: APIService;

  constructor(config: Config) {
    this.config = config;
  }

  get api() {
    if (!this._api) {
      this._api = new APIService(this, this.config.api, 'ru');
    }
    return this._api;
  }
}

export default Services;
