import React from 'react'
import {useSearchParams} from "react-router-dom"
export default function Filter() {
    const [data,setData]=useSearchParams();
    const age = data.get('age');
    const city = data.get('city')
  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age is {age}</h3>
      <h3>City is {city}</h3>
      <button onClick={()=>setData({age:40})}>Set Age in Query Paramas</button>
      <button onClick={()=>setData({city:40})}>Set City in Query Paramas</button>
    </div>
  )
}
