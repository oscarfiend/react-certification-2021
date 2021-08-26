import { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase-config';
import { REACT_CHALLENGE_AUTH } from '../utils/constants';
import { storage } from '../utils/storage';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [autenticated, setAutenticated] = useState(false);

  useEffect(() => {
    if (!user) {
      const userStored = storage.get(REACT_CHALLENGE_AUTH);
      if (userStored) {
        setUser(userStored);
        setAutenticated(true);
      }
    }
  }, [user]);

  const signin = async (emailSent, passwordSent) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(emailSent, passwordSent)
      .then((response) => {
        const { uid, email } = response.user;
        const userExist = {
          id: uid,
          email,
        };
        storage.set(REACT_CHALLENGE_AUTH, userExist);
        setUser(userExist);
        setAutenticated(true);
        if (authError) setAuthError(null);
        return user;
      })
      .catch(() => {
        setAuthError(true);
      });
  };
  const signout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        storage.delete(REACT_CHALLENGE_AUTH);
        setUser(null);
        setAutenticated(false);
      });
  };

  return {
    user,
    autenticated,
    authError,
    signin,
    signout,
  };
};

export default useAuth;
