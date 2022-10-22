import { GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"
export default function Login() {

  return (
    <div>
      <GoogleLogin
        onSuccess={credentialResponse => {
          var decoded = jwt_decode(credentialResponse.credential)
          console.log(credentialResponse);
          console.log(decoded);
          console.log(decoded.name);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />

    </div>
  )
}