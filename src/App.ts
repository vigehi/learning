import React from 'react';
import { useConvexAuth } from 'convex/react';
import SignupForm from './SignupForm'; // Import the SignupForm component

function App() {
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <div className="App">
      {/* Check if the user is authenticated */}
      {isAuthenticated ? (
        <p>Logged in</p>
      ) : (
        <SignupForm />
      )}
    </div>
  );
}

export default App;
