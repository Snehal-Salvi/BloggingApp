import React, { useState } from 'react';
import { Label, TextInput, Alert, Spinner} from 'flowbite-react';
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div>
      <div>
     <h1> SignUp </h1>
     <form onSubmit={handleSubmit}>
      <div>
      <Label value='Your username'/>
      <TextInput
      type='text'
      placeholder='username'
      id='username'
      onChange={handleChange}/>
      </div>

      <div>
      <Label value='Your email'/>
      <TextInput
      type='email'
      placeholder='email'
      id='email'
      onChange={handleChange}/>
      </div>

      <div>
      <Label value='Your password'/>
      <TextInput
      type='password'
      placeholder='password'
      id='password'
      onChange={handleChange}/>
      </div>

      <button style={{backgroundColor:'green', padding:'5px'}} disabled={loading}>
      {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
      </button>
     </form>

     <div>
      <span>Have an account? </span>
      <Link to='/signin' className='text-blue-500'> SignIn</Link>
     </div>

     {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}

      </div>
     </div>
  )
}
