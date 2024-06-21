import { Redirect } from "expo-router";
import userAuth from "./userAuth";

export default function Protected({ children }: { children: React.ReactNode }) {
  const isAuthenticated = userAuth();

  return isAuthenticated ? children : <Redirect href="/(routes)/login/" />;
}
