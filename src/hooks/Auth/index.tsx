import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Toast from "react-native-toast-message";

interface AuthContextType {
  user: SignInCredentials | null;
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
}

interface SignInCredentials {
  user: {
    id: number | null;
    name: string | null;
    email: string | null;
    password?: string | null;
  };
  role?: string | null;
  authenticated?: boolean;
}

export const Role = {
  SUPER: "SUPER",
  ADMIN: "ADMIN",
  USER: "USER",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SignInCredentials>({
    user: {
      id: null,
      name: null,
      email: null,
    },
    authenticated: false,
    role: null,
  });

  const signIn = async ({
    user: { name, email, password },
  }: SignInCredentials) => {
    if (email === "super@email.com" && password === "Super123") {
      setUser({
        user: { id: 1, name, email },
        role: Role.SUPER,
        authenticated: true,
      });
      Toast.show({
        type: "success",
        text1: "Login bem-sucedido!",
        text2: `Bem-vindo(a) ao sistema, ${name}!`,
      });
    }

    if (email === "admin@email.com" && password === "Admin123") {
      setUser({
        user: { id: 2, name, email },
        role: Role.ADMIN,
        authenticated: true,
      });
      Toast.show({
        type: "success",
        text1: "Login bem-sucedido!",
        text2: `Bem-vindo(a) ao sistema, ${name}!`,
      });
    }

    if (email === "user@email.com" && password === "User123") {
      setUser({
        user: { id: 3, name, email },
        role: Role.USER,
        authenticated: true,
      });
      Toast.show({
        type: "success",
        text1: "Login bem-sucedido!",
        text2: `Bem-vindo(a) ao sistema, ${name}!`,
      });
    }
  };

  const signOut = async () => {
    setUser({
      user: {
        id: null,
        name: null,
        email: null,
      },
      authenticated: false,
      role: null,
    });
    Toast.show({
      type: "signout",
      text1: "Você saiu do sistema!",
      text2: "Até a próxima!",
    });
  };

  useEffect(() => {
    console.log("AuthProvider", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
