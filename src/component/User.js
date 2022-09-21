import React from 'react'
import { useParams,useLocation } from 'react-router-dom'

export default function User() {
  const location = useLocation();
  console.log(location);

    const params = useParams();
    const {name,subname} = params
  return (
    <div>
      <h1>This Is {name} {subname}  Page</h1>
    </div>
  )
}
