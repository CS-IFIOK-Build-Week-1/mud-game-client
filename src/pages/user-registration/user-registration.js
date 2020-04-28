import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup';
import Axios from 'axios'
import { withFormik, Form, ErrorMessage } from 'formik'
import { Link, withRouter } from 'react-router-dom'

import PageTitle from '../../components/page-title'
import UserFormInput from '../../components/user-form-input'
import StyledButton from '../../components/Button'

import * as styles from '../../components/form-styles'


const PageCon = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserRegistration = props => {
  console.log(props)
  return (
    <PageCon>
      <PageTitle title="Register" />

      <styles.FormCon>
        <Form className="regForm">
          <ErrorMessage name="username" render={msg => <div className="error_message">{msg}</div>} />
          <UserFormInput
            type="text"
            name="username"
            placeholder="Username"
          />

          <ErrorMessage name="email" render={msg => <div className="error_message">{msg}</div>} />
          <UserFormInput
            type="email"
            name="email"
            placeholder="Email"
          />

          <ErrorMessage name="password1" render={msg => <div className="error_message">{msg}</div>} />
          <UserFormInput
            type="password"
            name="password1"
            placeholder="Password"
          />

          <ErrorMessage name="password2" render={msg => <div className="error_message">{msg}</div>} />
          <UserFormInput
            type="password"
            name="password2"
            placeholder="Confirm password"
          />

          <StyledButton buttonName="Register" />
          <styles.AfterButton>
            <p>Already registered?</p>
            <Link to="/login">Login here!</Link>
          </styles.AfterButton>
        </Form>
      </styles.FormCon>
    </PageCon>
  )
}

const UserRegFormik = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      email: "",
      password1: "",
      password2: "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().min(3).required("Please enter a username!"),
    email: Yup.string().email("Invalid email").required("Please enter an email!"),
    password1: Yup.string().min(8).required("Please enter a password!"),
    password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Passwords must match')
  }),

  handleSubmit(values, tools) {
    console.log("tools", tools)
    Axios.post("https://calm-headland-63030.herokuapp.com/api/registration/", values)
      .then(res => {
        console.log(res)
        tools.resetForm()

        // return res.data
      })
      .catch(err => {
        return err.message
      })
  }

})(UserRegistration)


export default UserRegFormik;
