import React from 'react';
import { Layout } from '@/components/Layout/Layout';
import {
  FileProvider,
  useFileContextInitializer
} from '@/contexts/FileContext/FileContext';

export const Workspace = () => {
  const fileProviderValues = useFileContextInitializer();

  return (
    <FileProvider value={fileProviderValues}>
      <Layout />
    </FileProvider>
  );
};
