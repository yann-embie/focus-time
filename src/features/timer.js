import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Countdown } from '../components/countdown';

export const Timer = ({ focusObject }) => {
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown onProgress={()=>{}} onEnd={()=> {}} isPaused/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  countdown: {flex: 0.5, alignItems:"center"},
});
