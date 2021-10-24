import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './NavigationStack';
import { colors } from './config/theme.json';

const AppContent = () => (
  <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <AppNavigator />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default AppContent;
