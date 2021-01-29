import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialFormValues = { username: '', password: '' };
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', formValues)
      .then((res) => {
        console.log(res.data.payload);
        if (
          formValues.username === 'Lambda School' &&
          formValues.password === 'i<3Lambd4'
        ) {
          localStorage.setItem('token', res.data.payload);
          props.history.push('/bubblepage');
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          placeholder='username'
          id='username'
          name='username'
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          placeholder='password'
          id='password'
          name='password'
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
