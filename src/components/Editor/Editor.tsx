import React from 'react';
import BaseEditor from '@monaco-editor/react';
import * as S from '@/components/Editor/styles';
import { useFiles } from '@/contexts/FileContext/FileContext';

type EditorProps = {
  className?: string; // Monaco editor applies a wrapper over the editor. Base className is used on that wrapper
};

export const Editor: React.FC<EditorProps> = ({ className }) => {
  const { selectedFile } = useFiles();

  return (
    <BaseEditor
      wrapperProps={{ className }}
      language="javascript"
      defaultValue={selectedFile?.contents || '// Write your code here'}
    />
  );
};
