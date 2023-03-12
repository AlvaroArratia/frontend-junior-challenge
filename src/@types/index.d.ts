export interface ArrayObj {
  id: string | number;
  [key: string]: any;
}

export interface SerializedData {
  [key: string]: any;
}

export type TodoListItemProps = {
  label: string;
  checked: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

export type TCreateTodo = Omit<ITodo, 'id'>;
export type TUpdateTodo = Partial<Omit<ITodo, 'id'>>;
