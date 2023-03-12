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
