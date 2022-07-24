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
<Link to='/result'>
<img src="/spintowin.png" className="clicker" alt="" srcSet=""/> 
            </Link>

<img src="/moviename.png" className="moviename" alt="" srcSet=""/> 

</div>
  );
}

export default Welcome;