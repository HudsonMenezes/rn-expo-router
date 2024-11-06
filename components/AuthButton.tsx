// components/AuthButton.tsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "expo-router";
import { globalStyles } from "../styles";

export default function AuthButton() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handlePress = () => {
    if (user) {
      logout();
      router.push("/auth/LoginScreen");
    } else {
      router.push("/auth/LoginScreen");
    }
  };

  return (
    <TouchableOpacity style={globalStyles.button} onPress={handlePress}>
      <Text style={globalStyles.buttonText}>{user ? "Logout" : "Login"}</Text>
    </TouchableOpacity>
  );
}
