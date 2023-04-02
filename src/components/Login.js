// import { Link } from '@material-ui/core';
import styled from 'styled-components'
import {Link} from "react-router-dom"

const LoginWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 400px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  img {
    width: 100px;
  }
  margin-left:550px;
  button {
    width: 100%;
    background: darkblue;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top:20px
  }
`

function Login() {
  return (
    <div>
      <LoginWrapper>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" />
            <button><Link to="/Data">Login to Google Drive</Link></button>
          </LoginWrapper>
    <div>
    </div>
    </div>
  );
}

export default Login;
