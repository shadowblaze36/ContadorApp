import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      {/* <HolaMundoScreen></HolaMundoScreen> */}
      {/* <ContadorScreen></ContadorScreen> */}
      {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
      {/* <DimensionesScreen></DimensionesScreen> */}
      {/* <PositionScreen></PositionScreen> */}
      {/* <FlexScreen></FlexScreen> */}
      <TareaScreen></TareaScreen>
    </SafeAreaView>


  );
};
