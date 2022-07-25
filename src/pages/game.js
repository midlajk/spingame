import './welcome.css'
import {useState} from 'react';

import {Link,useParams} from 'react-router-dom'
function Welcome() {
    const [clas, setIsActive] = useState('rotate');


    function selose(){
       
        setIsActive('rotateb')

    }
   
  
  return (
<div className="app">
<div className="middle">
 <h2> Welcome Back !</h2>
 <p>Spin the wheel to win exiting prizes <br/>
</p>

</div>
<div className="spinwheelsec">
<img src="/pointer.png" className="pointer" /> 
<img src="/spinwheel.png" className="rotate" alt="" srcSet=""/> 
</div>

<div className="flex-item">
            {/* <Link to='/result'> */}
           
            <img src="/spintowin.png" onClick={selose} className="playnow-btn clicker" alt="" srcSet="" />  
            {/* </Link> */}
            </div>
<img src="/moviename.png" className="moviename" alt="" srcSet=""/> 

</div>
  );
}

export default Welcome;