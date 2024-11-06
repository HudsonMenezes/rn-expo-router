// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { AuthProvider } from "@/hooks/Auth";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
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
  signout: (props) => (
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
  error: (props) => (
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
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      {/* Conteúdo da rota */}
      <Stack screenOptions={{ headerShown: false }} />
      <Toast config={toastConfig} />
    </AuthProvider>
  );
}
