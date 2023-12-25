import { File } from '@/models/File';
import { Node } from '@/models/Node';

const createNodeFromPath = (path: string, parentPath = '') => {
  const pathComponents = path.split('/');
  const isLastOne = pathComponents.length === 1; // last one
  const name = pathComponents.shift();

  const nodePath = parentPath === '' ? name : `${parentPath}/${name}`;

  const node: Node = {
    name,
    children: isLastOne
      ? []
      : [createNodeFromPath(pathComponents.join('/'), nodePath)],
    isFile: isLastOne,
    path: nodePath
  };

  return node;
};

const mergeNodes = (nodes: Node[]) => {
  if (nodes.length === 1) {
    return nodes;
  }

  const defaultInitNodes: Node[] = [];

  return nodes.reduce((prev, currentValue) => {
    const nodeIndex = prev.findIndex(node => node.name === currentValue.name);

    if (nodeIndex === -1) {
      return [...prev, currentValue];
    }

    prev[nodeIndex].children = mergeNodes([
      ...prev[nodeIndex].children,
      ...currentValue.children
    ]);
    return prev;
  }, defaultInitNodes);
};

export const getRootNode = (files: File[]) => {
  const children = mergeNodes(files.map(file => createNodeFromPath(file.path)));

  return {
    name: 'root',
    children: children,
    isFile: false,
    path: ''
  } as Node;
};
