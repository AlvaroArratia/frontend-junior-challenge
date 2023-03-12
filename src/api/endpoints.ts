const API_URL = 'https://my-json-server.typicode.com/AlvaroArratia/static-todos-api' as string;

const endpoints = {
  todos: {
    getAll: `${API_URL}/db`,
    getOne: (id: number) => `${API_URL}/todos/${id}`,
    create: `${API_URL}/todos`,
    toggle: (id: number) => `${API_URL}/todos/${id}`,
    delete: (id: number) => `${API_URL}/todos/${id}`,
  },
};

export { endpoints };
