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
