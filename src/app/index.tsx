import { globalStyles } from "@/styles";
import { router } from "expo-router";
import { View, Text, Button } from "react-native";
import { useAuth } from "../hooks/Auth";

export default function Index() {
  const { signIn, signOut } = useAuth();

  const handleEntrarSuper = async () => {
    try {
      signIn({
        user: {
          email: "super@email.com",
          id: 1,
          name: "Super Hudson",
          password: "Super123",
        },
      });
      router.replace("/(protected)");
    } catch (error) {}
  };

  return (
    <View style={globalStyles.container}>
      <Text style={{ fontSize: 24, marginBottom: 40 }}>Fazer Login</Text>
      <Button title="Login com Super Usuário" onPress={handleEntrarSuper} />
      <Button
        title="Login com Administrador"
        onPress={() =>
          signIn({
            user: {
              email: "admin@email.com",
              id: 2,
              name: "Administrador Hudson",
              password: "Admin123",
            },
          })
        }
      />
      <Button
        title="Login com Usuário Comum"
        onPress={() =>
          signIn({
            user: {
              email: "user@email.com",
              id: 3,
              name: "Usuário Hudson",
              password: "User123",
            },
          })
        }
      />
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}
