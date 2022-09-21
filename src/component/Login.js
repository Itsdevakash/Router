import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    const login=()=>{

        localStorage.setItem('login',true)
        navigate('/')
    }
    useEffect(()=>{

        let login = localStorage.getItem('login');
        if(login){
            navigate('/')
        }
        
        
        
        });
  return (
    <div>
        <h1>Login</h1>
        <input type="text" /><br></br>
        <input type="text" /><br></br>
        <button onClick={login}>Login</button>
      
    </div>
  )
}
