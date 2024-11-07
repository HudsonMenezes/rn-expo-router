import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { FontProvider } from "./Font";

export function AppProvider({ children }: { children: ReactNode }) {
  return <FontProvider>{children}</FontProvider>;
}
