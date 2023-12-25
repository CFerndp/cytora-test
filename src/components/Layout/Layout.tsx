import React from 'react';

import * as S from './styles';
import { Header } from '@/components/Layout/partials/Header/Header';

export const Layout = () => {
  return (
    <S.Layout>
      <S.Header />
      <S.TreeFile />
      <S.Editor />
    </S.Layout>
  );
};
