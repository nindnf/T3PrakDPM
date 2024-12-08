import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import TimerDisplay from '../components/TimerDisplay';
import ControlButtons from '../components/ControlButtons';
import Slider from '@react-native-community/slider';

const PomodoroScreen = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState(25 * 60); // Store the initial time to reset

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup on unmount
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  const handleSliderChange = (value) => {
    setInitialTime(value * 60); // Update time in seconds
    setTime(value * 60); // Set time to selected value
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <ImageBackground
      source={{ uri: 'https://source.unsplash.com/1600x900/?nature,water' }}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Pomodoro Timer</Text>
        <TimerDisplay minutes={minutes} seconds={seconds} />
        
        {/* Slider for adjusting time */}
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderText}>Set Timer (minutes):</Text>
          <Slider
            style={styles.slider}
            minimumValue={5}
            maximumValue={60}
            step={1}
            value={initialTime / 60}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#4caf50"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#ff5722"
          />
          <Text style={styles.sliderValue}>{Math.floor(initialTime / 60)} min</Text>
        </View>

        <ControlButtons
          onStart={handleStart}
          onPause={handlePause}
          onReset={handleReset}
          isRunning={isRunning}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  backgroundImage: {
    opacity: 0.3,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000', // Changed to black
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  sliderContainer: {
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: 16,
    color: '#000', // Changed to black
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    fontSize: 18,
    color: '#000', // Changed to black
    marginTop: 10,
  },
});

export default PomodoroScreen;
