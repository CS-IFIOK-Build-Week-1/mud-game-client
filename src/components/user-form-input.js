import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const UserFormInput = ({ type, name, placeholder }) => {
  return (
    <div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

UserFormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

UserFormInput.defaultProps = {
  type: undefined,
  name: undefined,
  placeholder: undefined,
};

export default UserFormInput;
