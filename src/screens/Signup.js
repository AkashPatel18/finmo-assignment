import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Signup = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, "Must be greater than 2 characters")
          .required("Required"),
        lastName: Yup.string()
          .min(2, "Must be greater than 2 characters")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "Password is too short - should be 8 chars minimum.")
          .max(16, "Password is too long - should be 8 chars maximum.")
          .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          marginTop: "100px",
          // border: "1px solid black",
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
          }}
        >
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" className={"field"} />
          <ErrorMessage name="firstName">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <label htmlFor="password">Password</label>
          <Field name="password" type="text" />
          <ErrorMessage name="password">
            {(msg) => <div className="error">{msg}</div>}
          </ErrorMessage>

          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};
