import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import store from './src/reducers/createStore';

import AppContent from './src/AppContent';

const App = () => (
  <>
    <StoreProvider store={store}>
      <AppContent />
    </StoreProvider>
  </>
);

export default App;
