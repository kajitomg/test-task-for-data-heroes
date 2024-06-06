import pushHistory from '@/shared/utils/push-history';
import replaceHistory from '@/shared/utils/replace-history';

export default function updateHistory(url:string, replace?:boolean) {
  if (replace) {
    replaceHistory({}, '', url);
  } else {
    pushHistory({}, '', url);
  }
}
