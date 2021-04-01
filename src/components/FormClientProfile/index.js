import React from "react";
import {
  CCardBody,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CSelect,
  CLabel,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

import "./styles.css";

export default function FormClientProfile({ user, usersStatus }) {
  const history = useHistory();

  return (
    <CCardBody>
      <CForm
        action=""
        method="post"
        encType="multipart/form-data"
        className="form-horizontal"
      >
        <CFormGroup row>
          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="text-input">Username*</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput required id="text-input" name="text-input" />
            <CFormText>This is a help text</CFormText>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="email-input">Full name*</CLabel>
          </CCol>
          <CCol xs="6" md="4">
            <CInput
              required
              id="first-input"
              name="first-input"
              placeholder="First name"
            />
            <CFormText className="help-block">
              Please enter your email
            </CFormText>
          </CCol>
          <CCol xs="6" md="4">
            <CInput
              required
              id="last-input"
              name="last-input"
              placeholder="Last name"
            />
            <CFormText className="help-block">
              Please enter your email
            </CFormText>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="select">Profile</CLabel>
          </CCol>
          <CCol xs="5" md="3">
            <CSelect custom name="select" id="select">
              <option value="">Select</option>
              {usersStatus.map((data) => (
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
            <CSelect custom name="select" id="select">
              <option value="">Select</option>
              {usersStatus.map((data) => (
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
              size="lg"
              color="danger"
              className="m-2"
              onClick={() => history.push("/users")}
            >
              Cancel
            </CButton>
            <CButton size="lg" color="primary" className="m-2">
              Save
            </CButton>
          </CCol>
        </CFormGroup>
      </CForm>
    </CCardBody>
  );
}
<CInput
  type="password"
  id="password-input"
  name="password-input"
  placeholder="Password"
  autoComplete="new-password"
/>;
