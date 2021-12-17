import * as yup from 'yup';

const login = yup.object().shape({
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

export { login };
