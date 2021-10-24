import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

import { styles } from './AppContent.style';

const AppContent = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default AppContent;
