import '@/shared/styles/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/app/app.vue';
import config from '@/config';
import Services from './shared/services';
import router from '@/app/router';

declare module 'pinia' {
  export interface PiniaCustomProperties {
    services: Services,
  }
}

const services = new Services(config);

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  // eslint-disable-next-line no-param-reassign
  store.services = services;
});

app.use(pinia);

app.use(router);


app.mount('#app');
