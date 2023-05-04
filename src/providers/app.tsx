import { store } from '@/lib/store';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

type AppProviderProps = {
  children: React.ReactNode;
};

const persistor = persistStore(store);

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
