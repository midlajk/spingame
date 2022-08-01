import './login.css'
import {Verifyotp} from '../api/apicall'

function mobileenter(props) {

    async function submitotp(){
        var registration = await Verifyotp(props.mobile,props.otp)
                if(registration.data.status==="matched"){
                    props.successed()
                }else{
                    alert('Invalid OTP')
                }
    }
  return (
    <div className="login">
<div className="navbar">
        <div className="navline">
        </div>
        <div className="navline active">
</div>
<div className="navline">
</div>
</div>

<div  className="middle">
<img src="/otp-3.png" className="phone" alt="" srcSet=""/>
 <h2>Enter The OTP </h2>
 <p>Enter the OTP code send to your number <br/>
 +91 {props.mobile} </p>

</div>
<div  className="second-last">
    <div className="otpdiv">
    <input type="text" className="otpinput" onInput={(value)=>{props.setotp(value.currentTarget.value)}} maxLength="4"/>



    </div>
<button className="btn" onClick={submitotp}>
Submit OTP
</button>
</div>
<img src="/moviename.png" className="moviename" alt="" srcSet=""/> 
</div>

  );
}

export default mobileenter;
