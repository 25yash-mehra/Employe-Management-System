import React, { useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/Register.css'; 
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register() {

const [showPassword,setShowPassword] = useState(false)


const handelToggel = ()=>{
  setShowPassword(!showPassword)
}

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  let navigate = useNavigate();

  useEffect(() => {
    if (isSubmitSuccessful) {
      navigate('/');
    }
  }, [isSubmitSuccessful, navigate]);

  const dataApi = async (data2) => {
    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data2)
      });
      const recive = await response.json();
      console.log(recive);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = (data) => {
    dataApi(data);
    console.log(data);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <div className="form-group">
          <input
            placeholder="Username"
            type="text"
            {...register('username', { required: { value: true, message: 'This field is necessary' } })}
          />
          {errors.username && <span className="error-message">{errors.username.message}</span>}
        </div>
        <div className="form-group">
          <input
            placeholder="Email"
            type="email"
            {...register('email', { required: { value: true, message: 'This field is required' } })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        <div className="form-group">
     
        <i className={showPassword ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'} onClick={handelToggel} id='icons'></i>
          <input
            placeholder="Password"
            type = {
            showPassword ? "text" : "password"
          }
            {...register('password', {
              required: { value: true, message: 'This field is required' },
              minLength: { value: 3, message: 'Minimum length is 3' },
              maxLength: { value: 6, message: 'Maximum length is 6' }
            })}
          />
          {/* <button onClick={()=>{handelToggel()}}>show</button> */}
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        <button type="submit">Submit</button>
        <NavLink to="/" className="login-link">Login</NavLink>
      </form>
    </div>
  );
}

export default Register;
