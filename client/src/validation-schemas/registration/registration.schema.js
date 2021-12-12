import * as yup from 'yup';

const registration = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(2, 'Username is too short')
    .max(30, 'Username is too long'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),
  password: yup
    .string()
    .required('Password is required')
    .min(3, 'Password is too short')
    .max(30, 'Password is too long')
});

export { registration };
