import { store } from "@/redux/store";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-toast-notifications";

// export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ToastProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(routes)/welcome-intro/index" />
          <Stack.Screen name="(routes)/login/index" />
          <Stack.Screen name="(routes)/sign-up/index" />
          <Stack.Screen name="(routes)/forgot-password/index" />
          {/* <Stack.Screen
          name="(routes)/course-details/index"
          options={{
            headerShown: true,
            title: "Course Details",
            headerBackTitle: "Back",
          }}
        /> */}
          {/* <Stack.Screen
          name="(routes)/cart/index"
          options={{
            headerShown: true,
            title: "Cart Items",
            headerBackTitle: "Back",
          }}
        /> */}
          <Stack.Screen
            name="(routes)/profile-details/index"
            options={{
              headerShown: true,
              title: "Profile Details",
              headerBackTitle: "Back",
            }}
          />
        </Stack>
      </ToastProvider>
    </Provider>
  );
}
