import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null);
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [passResetRequestSuccess, setPassResetRequestSuccess]=useState("");
  const [passResetRequestError, setPassResetRequestError]=useState("");

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)

  }

  const profileInfo = (userName, userImage) => {
    return updateProfile(auth.currentUser, {
      displayName: userName, photoURL: userImage
    })
  }

  const resetPassword = (email) => {
    console.log(email);
    setPassResetRequestSuccess("");
    setPassResetRequestError("");
    if(!email){
      setPassResetRequestError("Please enter an email!");
      return;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setPassResetRequestError("Please give an valid email!");
      return;
    }
    else{
      sendPasswordResetEmail(auth, email)
      .then((res) => {
        // Password reset email sent!
        // ..
        console.log(res);
        setPassResetRequestSuccess("A password reset link is sent to your email. Please check your email!");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setPassResetRequestError(errorMessage);
      
      });
    }

  }



  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
      setLoading(false);

    });

    return () => {
      unsubscribe();
    }
  }, [])



  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);

  }

  //   const refetchUser = useCallback(async () => {
  //     if (user?.email) {

  //       const res = await axiosPrivate.get(`/currentUserInfo/${user.email}`);
  //       console.log(res.data);
  //       setUserInfo(res.data);
  //       console.log("updated not again, ");

  //     }


  //   }, [axiosPrivate,user]);

  //   useEffect(() => {
  //     refetchUser(); 
  //   }, [refetchUser]);

  const authInfo = {
    user,
    createUser,
    profileInfo,
    signIn,
    loading,
    logOut,
    googleSignIn,
    resetPassword,
    passResetRequestSuccess,
    passResetRequestError,
    setPassResetRequestSuccess,
    setPassResetRequestError

  }
  console.log(user)
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;