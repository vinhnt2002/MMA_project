import CustomButton from "@/components/custom-button";
import FormField from "@/components/form-field";
import { images } from "@/constants";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { handleError } from "@/utils/handle-error";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Dimensions, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isSuccess }] = useLoginMutation();

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await login({ email, password }).unwrap();

      if (isSuccess) {
        Alert.alert("Success", "Đăng nhập thành công");
        router.replace("/home");
      }
    } catch (error: any) {
      Alert.alert("Error", handleError(error));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo as any}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Đăng nhập vào Aora
          </Text>
          <FormField
            title="Email"
            value={email}
            handleChangeText={setEmail}
            otherStyles="mt-7"
            placeholder="Nhập email"
          />
          <FormField
            title="Password"
            value={password}
            handleChangeText={setPassword}
            otherStyles="mt-7"
            placeholder="Nhập password"
          />
          <CustomButton
            title="Sign In"
            handlePress={handleSubmit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-black font-pregular">
              Bạn không có tài khoản?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Đăng kí
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
