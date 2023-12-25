import styled from '@emotion/styled';
import { Editor as BaseEditor } from '@/components/Editor/Editor';
import { Header as BaseHeader } from './partials/Header/Header';

export const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto auto;
  grid-gap: 2px;

  grid-template-areas: 'header header' 'menu editor';
`;

export const Title = styled.h3`
  grid-area: menu;
`;

export const Header = styled(BaseHeader)`
  grid-area: header;
  width: 100%;
  height: 100%;
`;

export const Editor = styled(BaseEditor)`
  grid-area: editor;
  width: 100%;
  height: 100%;
`;
