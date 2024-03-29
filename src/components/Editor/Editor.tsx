import React from 'react';
import BaseEditor from '@monaco-editor/react';
import { useSelectedFile } from '@/components/Editor/hooks';

type EditorProps = {
  className?: string; // Monaco editor applies a wrapper over the editor. Base className is used on that wrapper
};

export const Editor: React.FC<EditorProps> = ({ className }) => {
  const { value, language, onChange } = useSelectedFile();

  return (
    <BaseEditor
      wrapperProps={{ className, 'data-testid': 'editor' }}
      language={language}
      defaultValue={'// Write your code here'}
      value={value}
      onChange={onChange}
    />
  );
};
