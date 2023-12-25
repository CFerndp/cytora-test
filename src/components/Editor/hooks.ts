import { useFiles } from '@/contexts/FileContext/FileContext';

import { getLanguageBasedOnFileExtension } from './helpers';

export const useSelectedFile = () => {
  const { selectedFile } = useFiles();
  const language = getLanguageBasedOnFileExtension(selectedFile?.path);

  return {
    value: selectedFile?.contents,
    language
  };
};
