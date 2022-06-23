import { Button } from '../../components/button/Button';
import { SignUpForm } from '../../components/signUpForm/SignUpForm';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sign In</h1>

      <Button buttonType='google' onClick={logGoogleUser}>
        Sign In with Google Popup
      </Button>

      <SignUpForm />
    </>
  );
};
