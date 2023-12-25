import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import * as S from './styles';
import Typography from '@mui/material/Typography';

type HeaderProps = {
  className?: string;
};
export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <S.Header className={className}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            Code Editor
          </Typography>
        </Toolbar>
      </AppBar>
    </S.Header>
  );
};
