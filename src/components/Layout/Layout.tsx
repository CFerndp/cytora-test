import React from 'react';

import * as S from './styles';
import { Header } from '@/components/Layout/partials/Header/Header';

export const Layout = () => {
  return (
    <S.Layout>
      <S.Header>
        <Header />
      </S.Header>
      <S.Title>hello there</S.Title>
      <S.Editor />
    </S.Layout>
  );
};
