import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import Axios from 'axios'

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

    .error_message {
      color: #FF224A;
      margin-bottom: 0.3em;
      margin-top: 1em;
      font-size: 0.8em;
    }
    
    input {
      width: 400px;
      margin-top: 1em;
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
      margin-bottom: 1em;
      height: 50px;
      background: #FAFF13;
      color: #191919;
      border: none;
      font-family: 'Rokkitt', serif;
      font-weight: 600;
      font-size: 1.1em;
      letter-spacing: 0.12em;
      
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const AfterButton = styled.div`
  display: flex;
  justify-content: space-between;
  color: #FAFF13;
  font-size: 0.8em;
  
  p {
    margin: 0;
  }
  
  a {
    color: #FAFF13;
    font-style: italic;
  }
`;

const UserRegistration = props => {
  console.log(props)
  return (
    <PageCon>
      <PageTitle title="Register" />

      <FormCon>
        <Form className="regForm">
          <ErrorMessage name="username" render={msg => <div className="error_message">{msg}</div>} />
          <Field
            type="text"
            name="username"
            placeholder="Username"
          />

          <ErrorMessage name="email" render={msg => <div className="error_message">{msg}</div>} />
          <Field
            type="email"
            name="email"
            placeholder="Email"
          />

          <ErrorMessage name="password" render={msg => <div className="error_message">{msg}</div>} />
          <Field
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
          <AfterButton>
            <p>Already registered?</p>
            <Link to="/login">Login here!</Link>
          </AfterButton>
        </Form>
      </FormCon>
    </PageCon>
  )
}

const UserRegFormik = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().min(3).required("Please enter a username!"),
    email: Yup.string().email().required("Please enter a valid email address!"),
    password: Yup.string().min(5).required("Please enter a password!")
  }),

  handleSubmit(values, tools) {
    console.log("tools", tools)
    // Axios.post("https://reqres.in/api/users", values)
    //   .then(res => {
    //     // return res.data
    //     tools.resetForm()
    //   })
    //   .catch(err => {
    //     // return err
    //   })
  }

})(UserRegistration)

export default UserRegFormik;
