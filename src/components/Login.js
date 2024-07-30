import React ,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import '../style/Login.css'; // Import the CSS file for styling

function Login() {
  const [back,setBack] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const loginApi = async (data) => {
    try {
      let ldata = await fetch('http://localhost:8000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
   
      let store = await ldata.text();
      if(!ldata.ok){
       setBack(store.message || "something went wrong")
       console.log(store.message);
      }
      console.log(store);
    } catch (err) {
      console.log('Error:', err);
      // setBack("network error")
    }
  };

  const onSubmit = async (data) => {
    loginApi(data);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        {isSubmitting && <div className="loading">Loading...</div>}
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: { value: true, message: 'This field is required' } })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
          {back && <h1 className="backend-error">{back}</h1>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 3, message: 'Minimum length is 3' },
              maxLength: { value: 6, message: 'Maximum length is 6' }
            })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
        <div className="signup-link">
          <NavLink to="/signup">Sign up</NavLink>
        </div>
      </form>
    </div>
  );
}

export default Login;
