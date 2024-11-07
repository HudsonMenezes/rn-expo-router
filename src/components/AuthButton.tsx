// components/AuthButton.tsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { useRouter } from "expo-router";
import { useAuth } from "../hooks/Auth";
import { globalStyles } from "@/styles";

export default function AuthButton() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  // const handlePress = () => {
  //   if (user) {
  //     signOut();
  //     router.push("/auth/LoginScreen");
  //   } else {
  //     router.push("/auth/LoginScreen");
  //   }
  // };

  return (
    <TouchableOpacity style={globalStyles.button}>
      <Text style={globalStyles.buttonText}>{user ? "Logout" : "Login"}</Text>
    </TouchableOpacity>
  );
}
