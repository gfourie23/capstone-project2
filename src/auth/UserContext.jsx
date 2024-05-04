import React, { createContext, useState } from 'react';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };