import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import { Button } from '../button/Button';
import { FormInput } from '../formInput/FormInput';
import './signInForm.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect password for email');
      }
      if (error.code === 'auth/user-not-found') {
        alert('No user associated with this email');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          onChange={handleChange}
          value={email}
          name='email'
          id='email'
          type='email'
          required
        />

        <FormInput
          label='Password'
          onChange={handleChange}
          value={password}
          name='password'
          id='password'
          type='password'
          required
          minLength={6}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType='google'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
