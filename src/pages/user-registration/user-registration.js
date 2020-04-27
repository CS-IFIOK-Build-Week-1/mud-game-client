import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup';
import Axios from 'axios'
import { withFormik, Form, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom'

import PageTitle from '../../components/page-title'
import UserFormInput from '../../components/user-form-input'
import StyledButton from '../../components/Button'

import * as styles from '../../components/form-styles'


const PageCon = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserRegistration = props => {
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

          <ErrorMessage name="password" render={msg => <div className="error_message">{msg}</div>} />
          <UserFormInput
            type="password"
            name="password"
            placeholder="Password"
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
      password: ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().min(3).required("Please enter a username!"),
    password: Yup.string().min(5).required("Please enter a password!")
  }),

  handleSubmit(values, tools) {
    console.log("tools", tools)
    Axios.post("https://reqres.in/api/register", values)
      .then(res => {
        return res.data
        tools.resetForm()
      })
      .catch(err => {
        return err.message
      })
  }

})(UserRegistration)

export default UserRegFormik;
