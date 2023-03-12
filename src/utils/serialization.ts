import type { ArrayObj, SerializedData } from '@types';

export const serializeArrayObjById = (array: Array<ArrayObj>): Record<string | number, ArrayObj> => {
  return Object.fromEntries(array.map(item => [item.id, item]));
};

export const deserialize = (serializedData: SerializedData | null | undefined): any[] => {
  return Object.values(serializedData ?? {});
};
