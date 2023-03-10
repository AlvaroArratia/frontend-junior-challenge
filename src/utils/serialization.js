export const serializeArrayObjById = (array) =>
  Object.fromEntries(array.map((item) => [item.id, item]));

export const deserialize = (serializedData) =>
  Object.values(serializedData ?? {});
