import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ControlButtons = ({ onStart, onPause, onReset, isRunning }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={isRunning ? 'Pause' : 'Start'}
        onPress={isRunning ? onPause : onStart}
        color={isRunning ? '#ff5722' : '#4caf50'}
      />
      <Button title="Reset" onPress={onReset} color="#d9534f" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
});

export default ControlButtons;
