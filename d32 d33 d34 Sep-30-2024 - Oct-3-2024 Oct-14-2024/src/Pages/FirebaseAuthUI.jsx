// FirebaseAuthUI.js
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../firebaseConfig"; // Import your initialized Firebase Auth

// Configure FirebaseUI
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,  // Use modular EmailAuthProvider
    GoogleAuthProvider.PROVIDER_ID, // Use modular GoogleAuthProvider
    // Add other providers if needed
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false, // Avoid redirects after sign-in
  },
};

const FirebaseAuthUI = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default FirebaseAuthUI;
