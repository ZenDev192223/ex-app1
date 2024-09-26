import React, { useState, useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import HomePage from './components/HomePage';
import Signin from './components/Signin';

const TimedPage = ({ onTimerComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimerComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <HomePage />;
};

const App = () => {
  const [showTimedPage, setShowTimedPage] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleTimerComplete = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setShowTimedPage(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View className="flex-1">
      <Animated.View className="flex-1" style={{ opacity: fadeAnim }}>
        {showTimedPage ? (
          <TimedPage onTimerComplete={handleTimerComplete} />
        ) : (
          <Signin />
        )}
      </Animated.View>
    </View>
  );
};

export default App;