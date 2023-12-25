import React from 'react';

import { beforeEach, describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { FileProvider } from '@/contexts/FileContext/FileContext';

import { TreeFile } from '@/components/TreeFile/TreeFile';

import defaultFiles from '@/defaultFiles';

import '@testing-library/jest-dom';

describe('Given a valid list of files', () => {
  describe('When we render the TreeFile', () => {
    const mockedSetFileFunc = vi.fn();
    const mockedUpdateFunFunc = vi.fn();

    beforeEach(() => {
      render(
        <FileProvider
          value={{
            files: defaultFiles,
            setSelectedFile: mockedSetFileFunc,
            updateFile: mockedUpdateFunFunc
          }}>
          <TreeFile />
        </FileProvider>
      );
    });

    test('Then it should render the tree', async () => {
      expect(await screen.findByTestId('tree-file')).toBeInTheDocument();
    });

    test('Then, when we click on an element folded, it unfold', async () => {
      const appFolder = screen.getByText('app');

      expect(appFolder).toBeInTheDocument();
      expect(screen.queryByTestId('folder-data')).toBeNull();

      fireEvent.click(appFolder);

      expect(await screen.findByTestId('folder-data')).toBeInTheDocument();
    });

    test('Then, when we click on an file, it is selected', async () => {
      const appFolder = screen.getByText(/app/i);

      expect(appFolder).toBeInTheDocument();
      expect(screen.queryByTestId('folder-data')).toBeNull();

      fireEvent.click(appFolder);
      expect(await screen.findByTestId('folder-data')).toBeInTheDocument();

      fireEvent.click(screen.getByText('style.css'));
      expect(mockedSetFileFunc).toBeCalled();
    });
  });
});
