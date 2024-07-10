import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';

function Login() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors , isSubmitting},
      } = useForm();
      const onSubmit = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(data)
                console.log(data);
            },2000)
        })
      }
    //   console.log(watch("email"))


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