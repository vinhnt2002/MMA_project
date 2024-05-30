import { images } from "@/constants";
import { router } from "expo-router";
import { View, Text, Image } from "react-native";
import CustomButton from "../custom-button";


const EmptyState = ({ title, subtitle }: any) => {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        source={images.empty as any}
        resizeMode="contain"
        className="w-[270px] h-[216px]"
      />

      <Text className="text-sm font-pmedium text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {subtitle}
      </Text>

      <CustomButton
        title="Create your posts"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;