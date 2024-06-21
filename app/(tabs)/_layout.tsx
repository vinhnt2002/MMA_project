import Protected from "@/hooks/useProtected";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Protected>
      <Tabs
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === "index") {
                iconName = require("@/assets/icons/HouseSimple.png");
              } else if (route.name === "search/index") {
                iconName = require("@/assets/icons/search.png");
              } else if (route.name === "products/index") {
                iconName = require("@/assets/icons/BookBookmark.png");
              } else if (route.name === "profile/index") {
                iconName = require("@/assets/icons/User.png");
              }
              return (
                <Image
                  style={{ width: 25, height: 25, tintColor: color }}
                  source={iconName}
                />
              );
            },
            headerShown: false,
            tabBarShowLabel: false,
          };
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="search/index" />
        <Tabs.Screen name="products/index" />
        <Tabs.Screen name="profile/index" />
      </Tabs>
    </Protected>
  );
}
