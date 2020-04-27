import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'

import PageTitle from '../../components/page-title'


const PageCon = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormCon = styled.div`
  display:flex;
  justify-content: center;
  
  .regForm {
    display: flex;
    flex-direction: column;
    
    input {
      width: 400px;
      margin: 1em;
      height: 50px;
      background-color: hidden;
      background: none;
      border: 2px solid #08E152;
      padding-left: 2em;
      color: #FAFF13;

      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #FAFF13;
        font-family: 'Rokkitt', serif;
        font-weight: 500;
        font-size: 1.1em;
        letter-spacing: 0.1em;
        opacity: 0.4; /* Firefox */
      }

      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #FAFF13;
        font-family: 'Rokkitt', serif;
        font-weight: 500;
        font-size: 1.1em;
        letter-spacing: 0.1em;
        opacity: 0.4;
}

      ::-ms-input-placeholder { /* Microsoft Edge */
        color: #FAFF13;
        font-family: 'Rokkitt', serif;
        font-weight: 500;
        font-size: 1.1em;
        letter-spacing: 0.1em;
        opacity: 0.4;
      }
    }
    
    button {
      margin: 0;
      margin-top: 1em;
      height: 50px;
      background: #FAFF13;
      color: #191919;
      border: 2px solid #FAFF13;
      border: none;
      font-family: 'Rokkitt', serif;
      font-weight: 500;
      font-size: 1.1em;
      letter-spacing: 0.12em;
      
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const initialForm = {
  username: "",
  email: "",
  password: ""
}

const UserRegistration = () => {
  return (
    <PageCon>
      <PageTitle title="Register" />

      <FormCon>
        <form className="regForm">
          <input
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </FormCon>
    </PageCon>
  )
}

const UserRegFormik = withFormik({

})(UserRegistration)

export default UserRegFormik;
