import React from 'react'
import { Link,useLocation,useNavigate} from 'react-router-dom'
  

export default function Home() {
 
    const navigate = useNavigate();

    const navtop =(url)=>{
  
    navigate(url)
  
    }
  return (
    <div>
      <h1>Home Page</h1>
      <p>React Router enables "client side routing".</p>
      <p>In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.</p>
        <Link to="/about">Go to About</Link>&nbsp;
        <button onClick={()=>navigate('/about')}>Goto About</button>&nbsp;
        <button onClick={()=>navigate('/filter')}>Goto Filter</button>
<br></br><br></br>
        <button onClick={()=>navtop('/about')}>Goto About</button>&nbsp;
        <button onClick={()=>navtop('/filter')}>Goto Filter</button>
    </div>
  )
}
