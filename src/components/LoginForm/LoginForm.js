import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LOGIN_ASYNC, } from 'store/actions/account'
import { TextField, Button } from '@material-ui/core'
import { loginSchema  } from 'lib/validation/account'
import { Formik } from "formik"
import { Link } from 'react-router-dom'

export const LoginForm = props => {
  const dispatch = useDispatch()

  const [ email ] = useState('')
  const [ password ] = useState('')

  const handleLogin = payload => {
    dispatch({ type: LOGIN_ASYNC, payload})
  }

  return (
    <div>
      <Formik
        initialValues={{email,password}}
        onSubmit={handleLogin}
        validationSchema={loginSchema}
      >
        {
          props => {
            const {
            values,
            handleSubmit,
            handleChange,
            errors,
            touched
          } = props

          return (
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                label="Email"
                name="email"
                placeholder="Email을 입력하세요"
                value={values.email}
                onChange={handleChange}
                helperText={(errors.email && touched.email) && errors.email}
              ></TextField>
              <TextField
                type="password"
                label="Password"
                name="password"
                placeholder="Password를 입력하세요"
                value={values.password}
                onChange={handleChange}
                helperText={(errors.password && touched.password) && errors.password}
              ></TextField>
              <Button type="submit">LOGIN</Button>
              <Link to="/join">JOIN</Link>
            </form>
          )
        }
      }
      </Formik>
    </div>
  )
}