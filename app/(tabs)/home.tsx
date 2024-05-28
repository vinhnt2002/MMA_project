import React from "react";
import {  Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full ">
        <Text className="text-black">Home page</Text>
    </SafeAreaView>
  );
};

export default Home;
