import React, { createContext, ReactNode } from 'react';
import useAuth from '@/hooks/useAuth';
import { Session } from 'next-auth';


interface User {
    id: number;
    fullName: string;
    email: string;
    phone: string | null;
    age: string | null;
}

interface AuthContextProps {
  session: Session;
  user: User; 
  status: string; 
  token: string;
}


export const ContextAuth = createContext<AuthContextProps | null>(null);

interface ContextAuthProps {
  children: ReactNode;
}

const ContextAuthProvider: React.FC<ContextAuthProps> = ({ children }) => {
  const { session, user, status, token } = useAuth();

  const authContextValue: AuthContextProps = {
    session,
    user,
    status,
    token,
  };

  return (
    <ContextAuth.Provider value={authContextValue}>
      {children}
    </ContextAuth.Provider>
  );
};

export default ContextAuthProvider;
