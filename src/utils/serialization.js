export const serializeArrayObjById = (array) =>
  Object.fromEntries(array.map((item) => [item.id, item]));

export const deserialize = (serializedData) =>
  Object.values(serializedData ?? {});

export const getChekedTodos = (listTodos) => {
  if (listTodos?.length === 0 || !listTodos)
    return listTodos
    
  const chekedsTodo = listTodos?.filter((todoX) => todoX.checked === true)
  return chekedsTodo
}

