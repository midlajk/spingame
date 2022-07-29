import './welcome.css'
import {useState} from 'react';
import {prizecheck} from '../api/apicall'

import {Link,useParams} from 'react-router-dom'
function changevar(v) {
    document.documentElement.style.setProperty('--change', 180+'deg');
}
function Welcome() {
    const [clas, setIsActive] = useState('spin-win');


    async function selose(){
        setIsActive('rotate')
        var registration = await prizecheck()
       changevar(360)

    }
   
  
  return (
<div className="app">
<div className="middle">
 <h2> Welcome Back !</h2>
 <p>Spin the wheel to win exiting prizes <br/>
</p>

</div>
<div className="spinwheelsec">
<img src="/wheel-pointer.png" className="pointer" /> 
<img src="/spinwheel.png" className={clas} alt="" srcSet=""/> 
</div>

<div className="flex-item">
            {/* <Link to='/result'> */}
           
            <img src="/spintowin.png" onClick={selose} className="playnow-btn clicker" alt="" srcSet="" />  
            {/* </Link> */}
            </div>
<img src="/movienamegold.png" className="moviename" alt="" srcSet=""/> 

</div>
  );
}

export default Welcome;