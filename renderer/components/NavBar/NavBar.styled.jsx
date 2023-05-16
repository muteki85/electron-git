import {Layout} from 'antd';
import styled from 'styled-components';

const {Header} = Layout;

export const HeaderSticky = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
`;