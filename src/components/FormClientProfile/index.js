import React from "react";
import { useHistory } from "react-router-dom";
import {
  CCardBody,
  CCol,
  CFormGroup,
  CFormText,
  CInput,
  CSelect,
  CLabel,
  CButton,
} from "@coreui/react";
import api from "../../services/api";
import { Form, Formik } from "formik";

import FormClientProfileErrors from "./Errors";
import "./styles.css";

export default function FormClientProfile({
  user,
  listProfiles,
  listCompanies,
}) {
  const history = useHistory();

  async function onSubmit(values, { setSubmitting }) {
    const response = await api.put(`/users/${values.id}`, values);
    if (response.data) {
      alert("Usuário atualizado com sucesso !!!");
      setSubmitting(false);
    }
  }

  if (user === null || user.id === "") {
    return <></>;
  }

  return (
    <Formik
      initialValues={user}
      validate={(values) => {
        return FormClientProfileErrors(values);
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
                  disabled={true}
                />
                <CFormText color="danger">
                  {touched.username && errors.username}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="profile-fullname-input">Full name*</CLabel>
              </CCol>
              <CCol xs="6" md="4">
                <CInput
                  name="firstname"
                  placeholder="First name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstname}
                  disabled={true}
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
                  disabled={true}
                />
                <CFormText color="danger">
                  {touched.lastname && errors.lastname}
                </CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="select">Profile</CLabel>
              </CCol>
              <CCol xs="5" md="3">
                <CSelect
                  custom
                  name="select"
                  id="select-profile"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.profile}
                >
                  <option value="">Select</option>
                  {listProfiles.map((data) => (
                    <option key={data.id} value={data.description}>
                      {data.description}
                    </option>
                  ))}
                </CSelect>
              </CCol>

              <CCol md="2" className="col-form-user">
                <CLabel htmlFor="select">Company</CLabel>
              </CCol>
              <CCol xs="5" md="3">
                <CSelect
                  custom
                  name="select"
                  id="select-profile2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.company}
                >
                  <option value="">Select</option>
                  {listCompanies.map((data) => (
                    <option key={data.id} value={data.description}>
                      {data.description}
                    </option>
                  ))}
                </CSelect>
              </CCol>
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
