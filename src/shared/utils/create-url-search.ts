import type { Params } from '@/shared/utils/cleaning-params';

export default function createURLSearch(params: Params) {
  return new URLSearchParams(JSON.stringify(params)).toString();
}
