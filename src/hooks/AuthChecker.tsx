import React from "react";
import { useAuth } from "@/hooks/Auth";
import { Text } from "react-native";

function AuthChecker() {
  const auth = useAuth();
  console.log("Auth context:", auth); // Deve logar o contexto

  return <Text>Auth status: {auth ? "Available" : "Not Available"}</Text>;
}

export default AuthChecker;
