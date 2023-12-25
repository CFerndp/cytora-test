import { useFiles } from '@/contexts/FileContext/FileContext';

import { getLanguageBasedOnFileExtension } from './helpers';

export const useSelectedFile = () => {
  const { selectedFile, updateFile } = useFiles();
  const language = getLanguageBasedOnFileExtension(selectedFile?.path);

  const onChange = (value: string) => {
    if (selectedFile) {
      selectedFile.contents = value;
      updateFile(selectedFile);
    }
  };

  return {
    value: selectedFile?.contents,
    onChange,
    language
  };
};
