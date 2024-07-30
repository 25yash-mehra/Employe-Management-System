import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors , isSubmitting},
      } = useForm();

// api
 const loginApi = async(data) =>{
try{
    let ldata = await fetch(`http://localhost:8000/`,{
      method:'POST',
      headers:{"content-type": "application/json"},
      body:JSON.stringify(data)
    })
    let store = await ldata.json()
    console.log(store);
 }catch(err){
  console.log("error");
 }
}

      const onSubmit = async (data) => {
        loginApi(data)
      }
 


  return (
   <>
   {isSubmitting && <div>loading...</div>}
 <form onSubmit={handleSubmit(onSubmit)}>
<input type='email'  placeholder='email'  {...register("email",{required:{value:true,message:"this feild is required"}})}/>
{errors.email && <div>this email is important</div>}
<input type='password' placeholder='password'  {...register("password",{required:{value:true,message:"this feild is required"}, minLength:{value:3, message:"min value is 3"}, maxLength:{value:6, message:"max length is 6"}})}/>
{errors?.password && <div style={{color:"red"}}>{errors?.password?.message}</div>}
<button type='submit' disabled={isSubmitting} value='Submit'>submit</button>
 </form>
 <li>singup</li>
 <NavLink to="/signup">singup</NavLink>
   </>
  )
}

export default Login