/* ------------------------------------------------------- */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

/* ------------------------------------------------------- */

import { helloMyPackage } from 'my-package';

/* ------------------------------------------------------- */

function App() {

  helloMyPackage();
  
  return (
    <View style={{flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
      <Text >Metro Node Modules Issue</Text>
    </View>
  );
}

/* ------------------------------------------------------- */

export default App;
