import { createContext, useContext, useState } from 'react';

import { File } from '@/models/File';

import defaultFiles from '@/defaultFiles';

type FileContextType = {
  files: File[];
  selectedFile?: File;
  setSelectedFile: (path: string) => void;
};

export const FileContext = createContext<FileContextType>({
  files: [],
  setSelectedFile: () => {}
});

export const FileProvider = FileContext.Provider;

export const useFileContextInitializer = () => {
  const [selectedFile, setFile] = useState<File | null>();

  const setSelectedFile = (path: string) => {
    setFile(defaultFiles.find(file => file.path === path));
  };

  return { files: defaultFiles, selectedFile, setSelectedFile };
};

export const useFiles = () => useContext(FileContext);

export default FileContext;
