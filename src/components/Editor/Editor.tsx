import React from 'react';
import BaseEditor from '@monaco-editor/react';
import * as S from '@/components/Editor/styles';

type EditorProps = {
  className?: string; // Monaco editor applies a wrapper over the editor. Base className is used on that wrapper
};

export const Editor: React.FC<EditorProps> = ({ className }) => {
  return (
    <BaseEditor
      wrapperProps={{ className }}
      language="javascript"
      defaultValue="// some comment"
    />
  );
};
