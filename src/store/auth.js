import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  state: { token: localStorage.getItem('token'), user: null },
  actions: {
    setToken: () => {},
    setUser: () => {}
  }
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  const value = {
    state: { token, user },
    actions: { setToken, setUser }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const { Consumer: AuthConsumer } = AuthContext;
export { AuthProvider, AuthConsumer };
export default AuthContext;
