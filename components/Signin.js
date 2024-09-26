import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import googleIcon from "../assets/icon_google.png";
// import facebookIcon from "../assets/icon_facebook.svg";

function Signin() {
  return (
    <View className="flex-1 items-center justify-center p-5">
      <Text className="text-2xl font-bold mb-5">Create your own meal</Text>
      <View className="w-full items-center">
        <Text className="text-lg mb-4">Sign in</Text>
        <View className="w-full">
          <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-md mb-3">
            <Image source={googleIcon} className="w-6 h-6 mr-3" />
            <Text className="text-base">Sign in with Google</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity className="flex-row items-center bg-gray-100 p-3 rounded-md">
            <Image source={facebookIcon} className="w-6 h-6 mr-3" />
            <Text className="text-base">Sign in with Facebook</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

export default Signin;
