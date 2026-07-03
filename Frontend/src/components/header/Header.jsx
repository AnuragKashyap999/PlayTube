import React from 'react'
import {useNavigate} from 'react-dom'
function Header() {
    const navigate = useNavigate()

    const navItem=[
        {
            title:"Home",
            path:'"/"'
        },
        {
            title:"About",
            path:'"/about"'
        },
        {
            title:"Sign in" ,
            path:'"/signup"'
        },
        {
            title:"Profile",
            path:'"/profile"'
        }
    ]
  return (
    <div>
      
    </div>
  )
}

export default  Header