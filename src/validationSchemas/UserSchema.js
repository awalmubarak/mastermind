import * as Yup from 'yup'

export default Yup.object().shape({
    email: Yup.string()
      .email('Enter a valid email')
      .required('Please enter a valid email'),
    password: Yup.string()
      .required("Password is required")
      .min(6, 'Password must have at least 6 characters ')
  })