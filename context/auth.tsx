import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  loginWithToken: any;
  login: any;
  logout: any;
}

const AuthContext = createContext<Partial<AuthContextType>>({});

function AuthProvider({ children }: any) {
  const [user, setUser] = useState({
    error: 'you are logged out, and there is no user object, and no token'
  } as any);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('token: ', token);
    if (!(token === null || token === undefined)) {
      login();
    }
    setIsLoading(false);
  }, []);

  function login() {
    setIsAuthenticated(true);
    localStorage.setItem('token', 'true');
    setUser({
      name: 'hello',
      msg: 'Logged in because token in localStorage'
    });
  }

  function logout() {
    setIsAuthenticated(false);
    setUser({
      error: 'you are logged out, and there is no user object, and no token'
    });
    localStorage.removeItem('token');
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
