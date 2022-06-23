import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { Button } from '../button/Button';
import { FormInput } from '../formInput/FormInput';
import './signUpForm.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } =
    formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      }
      console.log('user creation encountered error', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          onChange={handleChange}
          value={displayName}
          name='displayName'
          id='displayName'
          type='text'
          required
        />

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

        <FormInput
          label='Confirm Password'
          onChange={handleChange}
          value={confirmPassword}
          name='confirmPassword'
          id='confirmPassword'
          type='password'
          required
          minLength={6}
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};
