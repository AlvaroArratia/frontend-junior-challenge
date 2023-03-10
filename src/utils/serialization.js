export const serializeArrayObjById = (array) => {
  const serializedArray = {};
  array.forEach((element) => {
    serializedArray[element.id] = element;
  });
  return serializedArray;
};

export const deserialize = (serializedData) => {
  return Object.values(serializedData ?? {});
};
