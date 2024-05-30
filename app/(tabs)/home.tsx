import CustomButton from "@/components/custom-button";
import { useLogOutQuery } from "@/redux/features/auth/authApi";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state: any) => state.auth);
  console.log(user);

  const [logout, setLogout] = useState(false);
  const { isLoading } = useLogOutQuery(null, {
    skip: !logout ? true : false,
  });

  const handleLogoutTest = async () => {
    setLogout(true);
  };

  return (
      <SafeAreaView className="bg-primary h-full ">
        <Text className="text-black">Home page</Text>
        <CustomButton
          title="test Logout"
          handlePress={handleLogoutTest}
          containerStyles="mt-7"
          isLoading={isLoading}
        />
      </SafeAreaView>
  );
};

export default Home;
