import React from "react";
import {
  CCardBody,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CInputRadio,
  CLabel,
  CSelect,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

import "./styles.css";

export default function FormClient({ user, usersStatus }) {
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
            <CLabel htmlFor="password-input">E-mail Address*</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput
              type="email"
              id="email-input"
              name="email-input"
              placeholder="Enter Email"
              autoComplete="email"
              required
            />
            <CFormText className="help-block">
              Please enter a complex password
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
              id="tel-input"
              name="tel-input"
              placeholder="(00) 0000-0000"
            />
            <CFormText className="help-block">
              Please enter a complex password
            </CFormText>
          </CCol>
          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="password-input">Mobile Number*</CLabel>
          </CCol>
          <CCol xs="5" md="3">
            <CInput
              type="number"
              id="cel-input"
              name="cel-input"
              placeholder="(00) 00000-0000"
            />
            <CFormText className="help-block">
              Please enter a complex password
            </CFormText>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="text-input">Password</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput
              required
              type="password"
              id="text-input"
              name="text-input"
            />
            <CFormText>This is a help text</CFormText>
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="text-input">Confirm Password</CLabel>
          </CCol>
          <CCol xs="12" md="8">
            <CInput
              required
              type="password"
              id="text-input"
              name="text-input"
            />
            <CFormText>This is a help text</CFormText>
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
                name="inline-radios"
                value="option1"
              />
              <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
                Yes
              </CLabel>
            </CFormGroup>
            <CFormGroup variant="custom-radio" inline>
              <CInputRadio
                custom
                id="inline-radio2"
                name="inline-radios"
                value="option2"
              />
              <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
                Never
              </CLabel>
            </CFormGroup>
          </CCol>

          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="date-input">Expire Date</CLabel>
          </CCol>
          <CCol xs="5" md="3">
            <CInput
              type="date"
              id="date-input"
              name="date-input"
              placeholder="date"
            />
          </CCol>
        </CFormGroup>
        <CFormGroup row>
          <CCol md="2" className="col-form-user">
            <CLabel htmlFor="select">Status</CLabel>
          </CCol>
          <CCol xs="6" md="4">
            <CSelect custom name="select" id="select">
              <option value="">Selecione</option>
              {usersStatus.map((data) => (
                <option key={data.id} value={data.description}>
                  {data.description}
                </option>
              ))}
            </CSelect>
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
