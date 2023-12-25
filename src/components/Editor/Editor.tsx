import React from 'react';
import BaseEditor from '@monaco-editor/react';
import { useFiles } from '@/contexts/FileContext/FileContext';

type EditorProps = {
  className?: string; // Monaco editor applies a wrapper over the editor. Base className is used on that wrapper
};

export const Editor: React.FC<EditorProps> = ({ className }) => {
  const { selectedFile } = useFiles();
  console.log(selectedFile);

  return (
    <BaseEditor
      wrapperProps={{ className }}
      language="javascript"
      defaultValue={'// Write your code here'}
      value={selectedFile.contents}
    />
  );
};
