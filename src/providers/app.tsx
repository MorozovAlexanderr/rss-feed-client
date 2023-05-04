import { store } from '@/lib/store';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>{children}</StoreProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
