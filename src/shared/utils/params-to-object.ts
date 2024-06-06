export default function paramsToObject(entries: IterableIterator<[string, string]>) {
  let result:{[key:string]:string} = {};
  for (const [key] of entries) {
    result = JSON.parse(key);
  }
  return result;
}
