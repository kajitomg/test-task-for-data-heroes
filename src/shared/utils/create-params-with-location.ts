import type { Params } from '@/shared/utils/cleaning-params';
import getLocationParams from '@/shared/utils/get-location-params';
import paramsToObject from '@/shared/utils/params-to-object';

export default function createParamsWithLocation(newParams?: Params) {
  return { ...paramsToObject(new URLSearchParams(getLocationParams()).entries()), ...newParams };
}
