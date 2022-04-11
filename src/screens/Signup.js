import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../Redux/actions/userActions";

export const Signup = () => {
  const dispatch = useDispatch();

  return (
    <div className="loginContainer">
      <div>
        <h3>Register Here</h3>
      </div>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Must be greater than 2 characters")
            .required("Required"),
          lastName: Yup.string()
            .min(2, "Must be greater than 2 characters")
            .required("Required"),
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
          setSubmitting(false);
          dispatch(
            register(
              values.firstName,
              values.lastName,
              values.email,
              values.password
            )
          );
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" className={"field"}></Field>
            <ErrorMessage name="firstName">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" className={"field"}></Field>
            <ErrorMessage name="lastName">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" className={"field"} />
            <ErrorMessage name="email">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={"field"} />
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
        Have an account ? <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};
