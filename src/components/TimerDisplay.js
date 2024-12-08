import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TimerDisplay = ({ minutes, seconds }) => {
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#ffcb77',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  timerText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#343a40',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default TimerDisplay;
