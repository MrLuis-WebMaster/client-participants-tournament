import { useEffect, useState, useMemo, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';


interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  age: string | null;
}

interface AuthHookResult {
  session: Session | null;
  status: string;
  token: string;
  user: User | null;
}

const useAuth = (): AuthHookResult => {
  const sessionData = useSession();
  const { data: session, status } = useMemo(() => sessionData, [sessionData]);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  const checkAuth = useCallback(async () => {
    if (session?.user?.name) {
      const tokenResponse = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/generateToken`, {
        method: 'POST',
        body: JSON.stringify({
          fullName: session.user.name,
          email: session.user.email
        })
      });

      const newToken = (await tokenResponse.json()).token;
      setToken(newToken);

      if (newToken) {
        const userResponse = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/participants/email/${session.user.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${newToken}`
          },
        });

        const newUser: User = await userResponse.json();
        setUser(newUser);
      }
    }
  }, [session, setToken, setUser]);

  useEffect(() => {
    if (status === "authenticated") {
      checkAuth();
    }
  }, [status, checkAuth]);

  return { session, status, token, user };
};

export default useAuth;
