import { createContext, useContext, useState } from 'react';

import { File } from '@/models/File';

import defaultFiles from '@/defaultFiles';

type FileContextType = {
  files: File[];
  selectedFile?: File;
  updateFile: (file: File) => void;
  setSelectedFile: (path: string) => void;
};

export const FileContext = createContext<FileContextType>({
  files: [],
  setSelectedFile: () => {},
  updateFile: () => {}
});

export const FileProvider = FileContext.Provider;

export const useFileContextInitializer = () => {
  const [files, setFiles] = useState<File[]>(defaultFiles);
  const [selectedFile, setFile] = useState<File | null>();

  const setSelectedFile = (path: string) => {
    setFile(files.find(file => file.path === path));
  };

  const updateFile = (file: File) => {
    setFiles(files.map(f => (f.path === file.path ? file : f)));
  };

  return { files, selectedFile, setSelectedFile, updateFile };
};

export const useFiles = () => useContext(FileContext);

export default FileContext;
