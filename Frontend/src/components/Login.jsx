import React from 'react'
import { useForm , Controller} from "react-hook-form"
import {Input,Button} from './index.js'
function Login() {
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  const onSubmit = (data)=>{
    console.log(data)
    reset()
  }
  
  return (
    <div className='flex justify-center items-center min-h-screen '>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className='text-4xl font font-bold '>Login</div>
       <div className=' mt-2 mb-2'>
         <Input {...register('email',{
            required:'FullName or Email is required'
        })} type='text' placeholder='Enter your full name or email' label='FullName or Email'/>
        {errors.email && (<p className='mt-1  text-sm text-red-700'>{errors.email.message}</p>)}
       </div>
       <div className='mt-2 mb-2'>
        <Input type='text' placeholder='Enter your password' label='Password'{...register("password",{
            required:'Password is requied'
        })}/>
        {errors.password && (<p className='mt-1  text-sm text-red-700'>{errors.password.message}</p>)}
       </div>

       <Button className="rounded-xl  " value='Login'/>

      </form>
    </div>
  )
}

export default Login
