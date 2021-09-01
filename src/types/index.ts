export interface Itodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: Date;
}

export type checkTodo = {
  id: string;
  isCheck: boolean;
};

export type editTodo = {
  id: string;
  content: string;
};

export type list = Itodo[];
