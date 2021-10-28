import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useReduxState } from './hooks/useReduxState';
import AppNavigator from './NavigationStack';
import { colors } from './config/theme.json';
import Loading from './components/Loading/Loading';

const AppContent = () => {
  const { loading } = useReduxState();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        {(loading.amount > 0) && <Loading />}
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppContent;
