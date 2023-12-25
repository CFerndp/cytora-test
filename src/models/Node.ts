export type Node = {
  name: string;
  children?: Node[];
  isFile?: boolean;
  path?: string;
};
