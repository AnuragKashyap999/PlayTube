import React from 'react'
import {useNavigate, Link} from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    const navItem=[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Sign in" ,
            path:"/signup"
        },
        {
            title:"Profile",
            path:"/profile"
        }
    ]
  return (
    <div>
     <div className='mr-4'>
        <Link to='/'>
        <h1>Logo</h1>
        </Link>
     </div>
     <ul>
      {navItem.map((item)=>(
        <li key={item.title}>
            <button  className='inline-block py-6 px-6 '
             onClick={()=>navigate(item.path)}>{item.title}</button>
        </li>
      ))}
     </ul> 
    </div>
  )
}

export default  Header