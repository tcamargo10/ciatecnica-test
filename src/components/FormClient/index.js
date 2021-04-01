import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

import {
  CCardBody,
  CCol,
  CFormGroup,
  CFormText,
  CInput,
  CInputRadio,
  CLabel,
  CSelect,
  CButton,
} from "@coreui/react";

import { Form } from "formik";

import FormClientErrors from "./Errors";
import "./styles.css";

export default function FormClient({ user, usersStatus }) {
  const history = useHistory();

  function onSubmit(values, { setSubmitting }) {
    values.registered = Date.now();
    values.fullname = `${values.firstname} ${values.lastname}`;
    values.id = Math.floor(Math.random() * 100);

    alert("Salvo");
    console.log(values);
    setSubmitting(false);

    history.push(`/users/${values.id}`);
  }

  if (user === null) {
    return <></>;
  }

  return (
    <Formik
      initialValues={user}
      validate={(values) => {
        return FormClientErrors(values);
      }}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <CCardBody>
          <Form onSubmit={handleSubmit} className="form-horizontal">
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="text-input">Username*</CLabel>
              </CCol>
              <CCol xs="12" md="8">
                <CInput
                  name="username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                />
                <CFormText color="danger">
                  {touched.username && errors.username}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="firstname-input">Full name*</CLabel>
              </CCol>
              <CCol xs="6" md="4">
                <CInput
                  name="firstname"
                  placeholder="First name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstname}
                />
                <CFormText color="danger">
                  {touched.firstname && errors.firstname}
                </CFormText>
              </CCol>
              <CCol xs="6" md="4">
                <CInput
                  name="lastname"
                  placeholder="Last name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastname}
                />
                <CFormText color="danger">
                  {touched.lastname && errors.lastname}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="password-input">E-mail Address*</CLabel>
              </CCol>
              <CCol xs="12" md="8">
                <CInput
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  autoComplete="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                <CFormText color="danger">
                  {touched.email && errors.email}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="password-input">Phone Number</CLabel>
              </CCol>
              <CCol xs="5" md="3">
                <CInput
                  type="number"
                  name="phone"
                  placeholder="(00) 0000-0000"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                />
                <CFormText color="danger">
                  {touched.phone && errors.phone}
                </CFormText>
              </CCol>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="password-input">Mobile Number*</CLabel>
              </CCol>
              <CCol xs="5" md="3">
                <CInput
                  type="number"
                  name="cel"
                  placeholder="(00) 00000-0000"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cel}
                />
                <CFormText color="danger">
                  {touched.cel && errors.cel}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="text-input">Password</CLabel>
              </CCol>
              <CCol xs="12" md="8">
                <CInput
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <CFormText color="danger">
                  {touched.password && errors.password}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="text-input">Confirm Password</CLabel>
              </CCol>
              <CCol xs="12" md="8">
                <CInput
                  type="password"
                  name="password2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password2}
                />
                <CFormText color="danger">
                  {touched.password2 && errors.password2}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="date-input">Expire</CLabel>
              </CCol>

              <CCol md="3">
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio1"
                    name="expire"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    checked={values.expire}
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                    Yes
                  </CLabel>
                </CFormGroup>
                <CFormGroup variant="custom-radio" inline>
                  <CInputRadio
                    custom
                    id="inline-radio2"
                    name="expire"
                    onChange={handleChange}
                    checked={!values.expire}
                  />
                  <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                    Never
                  </CLabel>
                </CFormGroup>
              </CCol>

              {values.expire && (
                <>
                  <CCol md="2" className="col-form-user">
                    <CLabel htmlFor="date-input">Expire Date</CLabel>
                  </CCol>
                  <CCol xs="5" md="3">
                    <CInput
                      type="date"
                      name="expireDate"
                      placeholder="date"
                      onChange={handleChange}
                      value={values.expireDate}
                    />
                    <CFormText color="danger">
                      {touched.expireDate && errors.expireDate}
                    </CFormText>
                  </CCol>
                </>
              )}
            </CFormGroup>

            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="select">Status</CLabel>
              </CCol>
              <CCol xs="6" md="4">
                <CSelect
                  custom
                  name="select"
                  onChange={handleChange}
                  value={values.status}
                >
                  {usersStatus.map((data) => (
                    <option key={data.id} value={data.description}>
                      {data.description}
                    </option>
                  ))}
                </CSelect>
                <CFormText color="danger">
                  {touched.status && errors.status}
                </CFormText>
              </CCol>
              <label style={{ margin: 0, alignSelf: "center" }}>days</label>
            </CFormGroup>

            <CFormGroup row>
              <CCol
                xs="12"
                md="12"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: 40,
                  paddingTop: 20,
                }}
              >
                <CButton
                  color="danger"
                  className="m-2"
                  onClick={() => history.push("/users?page=1")}
                >
                  Cancel
                </CButton>
                <CButton
                  color="primary"
                  className="m-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Save
                </CButton>
              </CCol>
            </CFormGroup>
          </Form>
        </CCardBody>
      )}
    </Formik>
  );
}
