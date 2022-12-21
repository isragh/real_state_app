import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

function Profile() {
  const [user, setUser] = useState({})

  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user
    ? <h1>Hello {user.displayName}</h1>
    : 'Please, sign in';
}

export default Profile;