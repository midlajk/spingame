import './login.css'

import {Link,useParams} from 'react-router-dom'

function mobileenter(props) {

  return (
    <div className="login">
<div className="navbar">
        <div className="navline">
        </div>
        <div className="navline">
</div>
<div className="navline active">
</div>
</div>

<div  className="middle">
<img src="/success.png" className="phone" alt="" srcSet=""/>
 <h2>You Have Logged in Succesfully </h2>
 <p>Agree the terms and condition  <br/>
 to continue into the game
 </p>

</div>
<div   className="second-last">
    <div className="otpdiv">
    <input type="checkbox" onInput={(value)=>{props.setChecked(value.target.checked)}} />
I agree to the <a href="http://google.com" target="_blank" rel="noopener noreferrer">Terms & Condition</a> 


    </div>
    {props.checked &&  <Link to='/game' className="btnlink">
    <button className="btn">Continue</button>
    </Link>}
   

</div>
<img src="/moviename.png" className="moviename" alt="" srcSet=""/> 
</div>

  );
}

export default mobileenter;
