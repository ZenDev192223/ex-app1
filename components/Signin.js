import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import googleIcon from "../assets/icon_google.png";
// import facebookIcon from "../assets/icon_facebook.svg";

function Signin() {
  return (
    <LinearGradient
      colors={["#f8a705", "#f67a05"]} // cyan-500 to blue-500
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      className="flex-1 items-center justify-center"
    >
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-2xl font-bold mb-5">Create your own meal</Text>
        <View className="w-full items-center">
          <View className="w-[20.25rem] h-72 rounded-md bg-white">
            <Text className="text-lg mb-4">Sign in</Text>
            <View className="w-full font-bold">
              <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-full mb-6">
                {/* <Image source={googleIcon} className="w-6 h-6 mr-3" /> */}
                <Text className="font-bold text-base mx-14 my-[0.75rem]">
                  Sign in with Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-full mb-6">
                {/* <Image source={facebookIcon} className="w-6 h-6 mr-3" /> */}
                <Text className="text-base font-bold mx-14 my-[0.75rem]">
                  Sign in with Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-full">
                {/* <Image source={facebookIcon} className="w-6 h-6 mr-3" /> */}
                <Text className="text-base font-bold mx-14 my-[0.75rem]">
                  Sign in with email
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Signin;
