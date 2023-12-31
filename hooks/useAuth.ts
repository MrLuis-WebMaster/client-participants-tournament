"use client";
import { useEffect, useState, useMemo, useCallback } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import useNavigation from './useNavigation';

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
  const { searchParams, router, pathname } = useNavigation();
  const { data: session, status } = useMemo(() => sessionData, [sessionData]);
  const [token, setToken] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [redirectQuery, setRedirectQuery] = useState<string>(searchParams.get('redirect'));

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

        if (!newUser?.fullName && session) {
          signOut({callbackUrl: '/'})
        }

        setUser(newUser);
      }
    }
  }, [session, setToken, setUser]);

  useEffect(() => {
    if (status === "authenticated") {
      checkAuth();
    }
  }, [status, checkAuth]);

  useEffect(() => {
    setRedirectQuery(searchParams.get('redirect'))
    console.log(redirectQuery)
    if (status === "authenticated" && (redirectQuery === 'true')) {
      console.log('entra solo cuando hay un redirect = true')
      checkAuth();
      router.push(pathname)
    }
    return () => {
      setRedirectQuery('')
    }
  }, [status, checkAuth, redirectQuery, pathname, searchParams, router]);


  return { session, status, token, user };
};

export default useAuth;
