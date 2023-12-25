import { useFiles } from '@/contexts/FileContext/FileContext';
import { getRootNode } from '@/helpers/files/files';

export const useFileSystem = () => {
  const { files, setSelectedFile } = useFiles();
  const rootNode = getRootNode(files);

  return { rootNode, onClickFile: setSelectedFile };
};
