import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { query } from 'convex/browser';
const LoginForm = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    try {
      await loginWithRedirect();

      const user = await query('users').filter(q => q.eq('authId', authId)).first();
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <button onClick={handleLogin}>Log In</button>
  );
};

export default LoginForm; 
