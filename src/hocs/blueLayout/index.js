import React from 'react';
import Header from '../../components/header';
import { MainContent }  from './style';

const BlueLayout = WrappedComponent => {
  const Layout = () => (
    <>
      <Header color="blue" />
      <MainContent>
        <WrappedComponent/>
      </MainContent>
    </>
  );
  return Layout;
};

export default BlueLayout;
