import React, { useContext, useState } from 'react';
import {
  useFirebase,
  FirebaseContext,
} from '../../../plugins/gatsby-plugin-firebase';

export default function useUser() {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUser(user);
      const { displayName } = user;
      const { email } = user;
      const { emailVerified } = user;
      const { photoURL } = user;
      const { isAnonymous } = user;
      const { uid } = user;
      const { providerData } = user;
      // ...
    } else {
      setUser(null);
      // ...
    }
  });

  return user;
}
