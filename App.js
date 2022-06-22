import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import {Timer} from "./src/features/timer"

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

      // {currentSubject ? (
      // ) : (
      //   <Focus addSubject={setCurrentSubject} />
      // )}
  return (
    <SafeAreaView style={styles.container}>
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.secondary,
  },
  text: { color: colors.toDefine2 },
});
