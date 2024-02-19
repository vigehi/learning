
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createUserRecord } from '../convex/userActions'; 
const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [fullname, setFullname] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const { user, getAccessTokenSilently } = useAuth0();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await getAccessTokenSilently();
      const authId = user.sub; 

      await createUserRecord(username, email, phone, location, fullname, bio, profileImage, authId);

      console.log('User created successfully!');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Full Name" />
      <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
      <input type="text" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} placeholder="Profile Image URL" />

      <button type="submit">Sign Up</button>
    </form>
  );
};

// Exporting the SignupForm component
export default SignupForm;
