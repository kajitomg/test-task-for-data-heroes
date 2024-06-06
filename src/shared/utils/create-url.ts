import type { Params } from '@/shared/utils/cleaning-params';
import createURLSearch from '@/shared/utils/create-url-search';
import getLocationHash from '@/shared/utils/get-location-hash';
import getLocationPathname from '@/shared/utils/get-location-pathname';

export default function createURL(params: Params) {
  const urlSearch = createURLSearch(params);

  return getLocationPathname() + (urlSearch ? `?${urlSearch}` : '') + getLocationHash();
}
