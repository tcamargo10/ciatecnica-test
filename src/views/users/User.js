import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CSpinner,
  CTabContent,
  CTabPane,
  CTabs,
} from "@coreui/react";
import api from "../../services/api";
import FormClient from "../../components/FormClient";
import FormClientProfile from "../../components/FormClientProfile";

const User = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [usersStatus, setUsersStatus] = useState([]);

  useEffect(() => {
    setLoading(true);

    //Busca lista de usuarios na API
    async function getUsers() {
      const response = await api.get(`/users/${match.params.id}`);

      if (response.data) {
        setUser(response.data);
      }
    }

    //busca lista de status na API
    async function getStatusUsers() {
      const response = await api.get(`/statususers`);

      if (response.data) {
        setUsersStatus(response.data);
      }

      setLoading(false);
    }

    getUsers();
    getStatusUsers();
  }, [match.params.id]);

  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>User</CCardHeader>
          <CCardBody>
            {!loading ? (
              <CTabs activeTab="registry">
                <CNav variant="tabs">
                  <CNavItem>
                    <CNavLink data-tab="registry">User Registry</CNavLink>
                  </CNavItem>
                  <CNavItem>
                    <CNavLink data-tab="profile">Profile</CNavLink>
                  </CNavItem>
                </CNav>
                <CTabContent>
                  <CTabPane data-tab="registry">
                    <FormClient user={user} usersStatus={usersStatus} />
                  </CTabPane>
                  <CTabPane data-tab="profile">
                    <FormClientProfile user={user} usersStatus={usersStatus} />
                  </CTabPane>
                </CTabContent>
              </CTabs>
            ) : (
              <CFormGroup
                row
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <CSpinner
                    color="primary"
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </div>
              </CFormGroup>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;
