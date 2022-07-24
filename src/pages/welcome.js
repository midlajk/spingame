import './welcome.css'
import {Link,useParams} from 'react-router-dom'
function Welcome() {
const params = useParams()
  return (
<div className="app">
  <div className="flex-item icon">
            <img src="/spinwheelsamp.png" className="spinner-1" alt="" srcSet=""/>
            <img src="/spintowin.png" className="spin-win" alt="" srcSet="" /> 
</div >
             <div className="flex-item">
            <Link to='/login'>
            <img src="/playnowbtn.png" className="playnow-btn" alt="" srcSet="" />  
            </Link>
            </div>
<div className="flex-item">
           <img src="/moviename.png" className="playnow-btn" alt="" srcSet=""/> 
</div>
   
</div>
  );
}

export default Welcome;
