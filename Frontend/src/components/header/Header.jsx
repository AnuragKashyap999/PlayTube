import React from 'react'
import {useNavigate} from 'react-dom'

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
     <ul>
      {navItem.map((item)=>(
        <li key={item.title}>
            <button onClick={()=>navigate(item.path)}>{item.title}</button>
        </li>
      ))}
     </ul> 
    </div>
  )
}

export default  Header