import { createContext, useContext, useState } from 'react';

import { File } from '@/models/File';

import defaultFiles from '@/defaultFiles';

type FileContextType = {
  files: File[];
  selectedFile?: File;
};

export const FileContext = createContext<FileContextType>({ files: [] });

export const FileProvider = FileContext.Provider;

export const useFileContextInitializer = () => {
  const [files] = useState(defaultFiles);

  return { files };
};

export const useFiles = () => useContext(FileContext);

export default FileContext;
