import { ClarityValue } from '../clarityValue';
import { ClarityType } from '../constants';

interface ListCV<T extends ClarityValue = ClarityValue> {
  type: ClarityType.List;
  list: T[];
}

function listCV<T extends ClarityValue = ClarityValue>(values: T[]): ListCV<T> {
  return { type: ClarityType.List, list: values };
}

export { ListCV, listCV };
