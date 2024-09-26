import { Animated, View, Image, SafeAreaView } from "react-native";
import { useEffect, useRef } from "react";
import Image1 from "../assets/LandingScreenImage1.png";
import { LinearGradient } from "expo-linear-gradient";
import Image2 from "../assets/LandingScreenImage2.png";

export default function HomePage() {
  const blinkAnim1 = useRef(new Animated.Value(1)).current;
  const blinkAnim2 = useRef(new Animated.Value(1)).current;

  // Use useEffect to start the blinking animation when the component is mounted
  useEffect(() => {
    // Function to create the blink effect
    const createBlinkAnimation = (animatedValue) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: 0, // fade out
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 1, // fade in
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      );
    };

    // Start both blink animations
    createBlinkAnimation(blinkAnim1).start();
    createBlinkAnimation(blinkAnim2).start();
  }, [blinkAnim1, blinkAnim2]);
  return (
    <LinearGradient
      colors={["#f8a705", "#f67a05"]} // cyan-500 to blue-500
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      className="flex-1 items-center justify-center"
    >
      <Animated.View
        className="w-72 h-72 bg-[#f7a60f] rounded-full flex items-center justify-center"
        style={[{ opacity: blinkAnim1 }]}
      >
        <Animated.View
          className="w-56 h-56 bg-[#dfcfb1] rounded-full flex items-center justify-center"
          style={[{ opacity: blinkAnim2 }]}
        ></Animated.View>
      </Animated.View>
      <View className="absolute inset-0 opacity-100">
          <Image source={Image1} />
      </View>
      <Image source={Image2} className="absolute bottom-0"></Image>
    </LinearGradient>
  );
}
