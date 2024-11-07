import { useAuth } from "@/src/hooks/Auth";
import { Button, Text, View } from "react-native";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}
