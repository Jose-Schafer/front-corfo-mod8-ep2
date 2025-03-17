import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { getCookie } from "@/lib/cookies";
import { decrypt } from "@/lib/encription";
import { jwtDecode } from "jwt-decode";

interface UserInterface {
  name?: string;
  role?: string[];
}

interface AuthContextType {
  user: UserInterface;
  setUser: React.Dispatch<React.SetStateAction<UserInterface>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInterface>({});

  useEffect(() => {
    const token = getCookie("auth-token");
    if (token) {
      const decryptedToken = decrypt(token);
      const decodedToken = jwtDecode(decryptedToken);
      const { name, role } = { ...decodedToken };
      setUser({ name, role });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
