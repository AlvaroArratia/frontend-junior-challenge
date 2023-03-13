export interface ArrayObj {
  id: string | number;
  [key: string]: any;
}

export interface SerializedData {
  [key: string]: any;
}

export interface ITodo {
  id: number;
  label: string;
  checked: boolean;
}

export type LoadingState = 'idle' | 'loading' | 'failed';

export interface ITodoState {
  todos: ITodo[];
  loading: LoadingState;
  error: string | null;
}

export type TodoListItemProps = {
  label: string;
  checked: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

export type TCreateTodo = Omit<ITodo, 'id'>;
export type TToggleTodo = Pick<ITodo, 'id' | 'checked'>;
export type TDeleteTodo = Pick<ITodo, 'id'>;
