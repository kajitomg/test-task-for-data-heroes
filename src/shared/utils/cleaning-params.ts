import isEmptyParam from '@/shared/utils/is-empty-param';

export type Params = Record<string, string | number>

export default function cleaningParams(params:Params) {
  const result:Params = {};
  const keysParams: string[] = Object.keys(params);
  for (const key of keysParams) {
    if (!isEmptyParam(params[key])) {
      result[key] = params[key];
    }
  }
  return result;
}
