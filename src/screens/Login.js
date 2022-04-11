import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../Redux/actions/userActions";

export const Login = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state).login;

  console.log(error);

  return (
    <div className="loginContainer">
      {error && alert(error)}
      <div>
        <h3>Login Here</h3>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Password is too short - should be 8 chars minimum.")
            .max(16, "Password is too long - should be 8 chars maximum.")
            .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values.email, values.password));
        }}
      >
        <div className="loginForm">
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: "300px",
            }}
          >
            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" className={"field"} />
            <ErrorMessage name="email">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <label htmlFor="password">Password</label>
            <Field name="password" type="text" className={"field"} />
            <ErrorMessage name="password">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <button type="submit" className="loginBtn">
              Submit
            </button>
          </Form>
        </div>
      </Formik>
      <p>
        New User ? <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};
