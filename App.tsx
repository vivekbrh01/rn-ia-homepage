import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Home from './src/components/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
