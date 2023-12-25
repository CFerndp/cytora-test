import { expect, test, describe } from 'vitest';
import { getRootNode } from '@/helpers/files/files';
import exp from 'node:constants';

describe('Given a valid list of 0 files', () => {
  const TEST_FILES = [];
  describe('When calling getRootNode', () => {
    test('Then it should return a valid Node', () => {
      const rootNode = getRootNode(TEST_FILES);

      expect(rootNode.name).toBe('root');
      expect(rootNode.children).toHaveLength(0);
    });
  });
});

describe('Given a valid list of 1 file ', () => {
  const TEST_FILES = [
    {
      path: 'app/data/featuredWidgets.js',
      contents: `export default [
  { name: 'spadoink', price: 777 },
  { name: 'kafloof', price: 1326 },
  { name: 'sweezil', price: 966 }
]`
    }
  ];

  describe('When calling getRootNode', () => {
    test('Then it should return a valid Node', () => {
      const rootNode = getRootNode(TEST_FILES);

      expect(rootNode.name).toBe('root');
      expect(rootNode.children).toHaveLength(1);
      expect(rootNode.children[0].name).toBe('app');

      expect(rootNode.children[0].children).toHaveLength(1);
      expect(rootNode.children[0].children[0].children).toHaveLength(1);
      expect(rootNode.children[0].children[0].name).toBe('data');
      expect(rootNode.children[0].children[0].children[0].name).toBe(
        'featuredWidgets.js'
      );
    });
  });
});

describe('Given a valid list of 2 files at the same level ', () => {
  const TEST_FILES = [
    {
      path: 'app/data/featuredWidgets.js',
      contents: `export default [
  { name: 'spadoink', price: 777 },
  { name: 'kafloof', price: 1326 },
  { name: 'sweezil', price: 966 }
]`
    },
    {
      path: 'app/data/discontinuedWidgets.js',
      contents: `export default [
  { name: 'neewumps', price: 138 },
  { name: 'snarcap', price: 5873 },
  { name: 'topwolly', price: 83 }
]`
    }
  ];

  describe('When calling getRootNode', () => {
    test('Then it should return a valid Node', () => {
      const rootNode = getRootNode(TEST_FILES);

      expect(rootNode.name).toBe('root');
      expect(rootNode.children).toHaveLength(1);
      expect(rootNode.children[0].name).toBe('app');

      expect(rootNode.children[0].children).toHaveLength(1);
      expect(rootNode.children[0].children[0].children).toHaveLength(2);
      expect(rootNode.children[0].children[0].name).toBe('data');
      expect(rootNode.children[0].children[0].children[0].name).toBe(
        'featuredWidgets.js'
      );
      expect(rootNode.children[0].children[0].children[1].name).toBe(
        'discontinuedWidgets.js'
      );
    });
  });
});
