import React from 'react'
import { useForm , Controller} from "react-hook-form"
import Input from './Input.jsx'
function Login() {
  const {register,SubmitHandler,Controller} = useForm();
//   const onSubmit 
  return (
    <div>
      <form>
        <Input {...register('email')} type='text' placeholder='Enter the name here' label='FullName'/>

      </form>
    </div>
  )
}

export default Login
