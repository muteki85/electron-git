import {Layout} from 'antd';
import styled from 'styled-components';

const {Header} = Layout;

export const HeaderSticky = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #001529!important;
  display: flex;
  justify-content: space-between;
  max-height: 64px;
`;

export const Title = styled.div`
    h1{
      color: #fff;
      font-size: 22px;
    } 
`;