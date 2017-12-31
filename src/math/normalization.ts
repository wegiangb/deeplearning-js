import { max, min, map } from 'lodash';

function normalization(values: Array<number>) {
  const maxNum = max(values);
  const minNum = min(values);

  return map(values, (num) => (
    (num - minNum) / (maxNum - minNum)
  ));
}

export default normalization;
