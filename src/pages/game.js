import './welcome.css'
import {Link,useParams} from 'react-router-dom'
function Welcome() {
  return (
<div className="app">
<div className="middle">
 <h2> Welcome Back !</h2>
 <p>Spin the wheel to win exiting prizes <br/>
</p>

</div>
<img src="/wheel.png" className="wheel" alt="" srcSet=""/> 
<div className="flex-item">
            <Link to='/result'>
            <img src="/playnowbtn.png" className="playnow-btn clicker" alt="" srcSet="" />  
            </Link>
            </div>
<img src="/moviename.png" className="moviename" alt="" srcSet=""/> 

</div>
  );
}

export default Welcome;