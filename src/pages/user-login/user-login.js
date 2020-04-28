import React from 'react'
import * as Yup from 'yup'
import Axios from 'axios'
import { withFormik, Form, ErrorMessage } from 'formik'
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'

import PageTitle from '../../components/page-title'
import UserFormInput from '../../components/user-form-input'
import StyledButton from '../../components/Button'

import * as styles from '../../components/form-styles'

const UserLogin = props => {
  return (
    <div>
      <PageTitle title="Login" />

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

          <StyledButton buttonName="Login" />
          <styles.AfterButton>
            <p>Don't have an account?</p>
            <Link to="/register">Register here!</Link>
          </styles.AfterButton>
        </Form>
      </styles.FormCon>
    </div>
  )
}

const UserLogFormik = compose(
  withRouter,
  withFormik({
    mapPropsToValues() {
      return {
        username: "",
        password: ""
      };
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().min(3).required("Please enter a username!"),
      password: Yup.string().min(8).required("Please enter a password!")
    }),

    handleSubmit(values, tools) {
      Axios.post("https://calm-headland-63030.herokuapp.com/api/login/", values)
        .then(res => {
          localStorage.setItem("key", res.data.key)
          tools.props.history.push("/dashboard")
          tools.resetForm()
        })
        .catch(err => {
          return err.message
        })
    },
  })
)(UserLogin)

export default UserLogFormik;
