import React from 'react'
import {Input,Button} from './index.js'
import {useForm} from 'react-hook-form'

function Signup() {
    const {register,handleSubmit,formState:{errors}} =useForm()
    const onSubmit = (data)=>{
      console.log(data)
    }
  return (
   <div className='flex justify-center items-center  min-h-screen '>
    <form onSubmit={handleSubmit(onSubmit)} >
    <div className='text-4xl font font-bold mb-2'>Sign up</div>
    <div>
      <Input className='mt-2 mb-2' label='FullName'  type='text' {...register('fullName',{
        required:"FullName is required",
        minLength:{
          value:3,
          message:"Full name must be at least 3 characters"
        }
      })} placeholder='Enter your full name' type='text'/>
      {errors.fullName && (<p className='mt-1  text-sm text-red-700'>{errors.fullName.message}</p>)}
    </div>
    <div>
        <Input className='mt-2 mb-2'  type='email' placeholder='Enter the email Id' label='Email'
        {...register('email',{
            required:'Email is required' ,
             pattern: {
             value: /^\S+@\S+\.\S+$/,
             message: 'Enter a valid email'
             }
        })} 
        />
        {errors.email && (<p className='mt-1  text-sm text-red-700'>{errors.email.message}</p>)}
    </div>
    <div>
        <Input className='mt-2 mb-2 '  type='password' placeholder='Enter the password' label='Password'
        {...register('password',{
            required:'Password is required',
            pattern: {
             value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
             message:
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
            }
        })}
        />
        {errors.password && (<p className='mt-1 text-sm text-red-700 w-80'>{errors.password.message}</p>)}
    </div>
    <Button className='rounded-xl' type='submit' value='Signup'/>
    </form>
   </div>
  )
}

export default Signup
