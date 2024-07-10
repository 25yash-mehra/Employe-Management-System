// import { response } from 'express'
import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

function Register() {
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm()


  const dataApi = async(data2) =>{
    try{
    const response = await fetch('http://localhost:8000/signup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(data2)
    })
    const recive = await response.json()
    console.log(recive);
  
  }catch(err){
    console.error(err)
  }
  }

  const onSubmit = (data) => {
    // dataApi(data)
    dataApi(data)
    console.log(data);
  }
  return (
<>
<form onSubmit={handleSubmit(onSubmit)}>
  <input placeholder='username' type='text' {...register("username",{required:{value:true,message:"this field is neccesary"}})}/>
  {errors.username && errors.username.message}
  <input placeholder='email'  type='email' {...register("email",{required:{value:true,message:"this feild is required"}})}/>
  {errors.email && errors.email.message}
  <input placeholder='password'  type='password' {...register("password",{required:{value:true,message:"this feild is require"},minLength:{value:3, message:"min is 3"},maxLength:{value:6, message:"max is 6"}})}/>
  {errors.password && errors.password.message}
  <button type='submit' value="Submit" >submit</button>
</form>
    <NavLink to="/">login</NavLink>
</>
  )
}


export default Register