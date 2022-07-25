import './login.css'
import {registermobile} from '../api/apicall'

function mobileenter(props) {
async function submitmobile(){
    var registration = await registermobile(props.mobile,"location")
    props.otpreq()
    console.log()
}

  return (
    <div className="login">
<div className="navbar">
        <div className="navline active">
        </div>
        <div className="navline">
</div>
<div className="navline">
</div>
</div>

<div  className="middle">
<img src="/mobile.png" className="phone" alt="" srcSet=""/>
 <h2>Login With Mobile Number </h2>
 <p>Enter your mobile number we will send <br/>
 you an OTP to verify </p>

</div>
<div  className="second-last">
  <input type="text" className="mobilenoinput" onInput={(value)=>{props.setMobile(value.currentTarget.value)}}/>
<button className="btn" onClick={submitmobile}>
Request OTP
</button>
</div>
<img src="/moviename.png" className="moviename" alt="" srcSet=""/> 
</div>

  );
}

export default mobileenter;
