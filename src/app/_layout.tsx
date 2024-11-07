// app/_layout.tsx
import React, { useEffect } from "react";
import { Stack, useSegments, router } from "expo-router";
import { StatusBar } from "react-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { AppProvider } from "../hooks";
import { useAuth } from "../hooks/Auth";

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
  signout: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "orange" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: "red" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: "bold",
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
};

export default function Layout() {
  const { user } = useAuth();
  const segments = useSegments();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)";

    if (!user?.authenticated && inAuthGroup) {
      router.push("/");
    } else if (user?.authenticated) {
      router.replace("/(protected)");
    }
  }, [user]);

  return (
    <AppProvider>
      <StatusBar barStyle="light-content" />
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(protected)" />
      </Stack>
      <Toast config={toastConfig} />
    </AppProvider>
  );
}
