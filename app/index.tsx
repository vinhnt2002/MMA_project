import { useState, useEffect } from "react";
import Loader from "@/components/loader/loader";
import userAuth from "@/hooks/userAuth";
import { Redirect } from "expo-router";

export default function TabsIndex() {
  const [loading, setLoading] = useState(false);
  const isAuthenticated = userAuth();

  // useEffect(() => {
  //   if (isAuthenticated === false) {
  //     setLoading(true);
  //   }else {
  //     setLoading(false)
  //   }
  // }, [isAuthenticated]);
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <Redirect
          href={!isAuthenticated ? "/(routes)/onboarding" : "/(tabs)"}
        />
      {/* )
      } */}
    </>
  );
}
