import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/custom-button";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* loader */}

      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo as any}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.main as any}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Khám phá Shop của chúng tôi{"\n"}
              Tên shop là <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path as any}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-black mt-7 text-center">
            Nơi Sáng Tạo Gặp Gỡ Đổi Mới: Khám Phá Vô Tận Cùng Aora - Bé Yêu Của
            Bạn
          </Text>

          <CustomButton
            title="Tiếp tục với Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
          <CustomButton
            title="Test qua home page"
            handlePress={() => router.push("/home")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
