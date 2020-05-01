import React from 'react'
import { Field } from 'formik'

const UserFormInput = ({ type, name, placeholder }) => {
  return (
    <div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default UserFormInput
