export interface Task {
  _id?: {$oid: string};
  name: string;
  description: string;
  created: string;
  end?: string;
  status: string;
  isDone: boolean;
  }
