import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CInput,
  CSelect,
  CLabel,
  CFormGroup,
  CModalHeader,
  CModal,
  CModalFooter,
  CModalBody,
  CSpinner,
  CAlert,
} from "@coreui/react";

import api from "../../services/api";
import CIcon from "@coreui/icons-react";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Users = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [completedListUsers, setCompletedListUsers] = useState([]);
  const [listUsers, setListUsers] = useState([]);
  const [usersStatus, setUsersStatus] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [countPages, setCountPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  const itemsPerPage = 5;

  const handleShowMessage = (message) => {
    setMessage(message);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    setLoading(true);

    //Busca lista de usuarios na API
    async function getUsers() {
      const response = await api.get(`/users/?_sort=id&_order=desc`);

      if (response.data) {
        setCompletedListUsers(response.data);
        setListUsers(response.data);
        refreshCountPages(response.data);
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
  }, [update]);

  // calcula quantidade de paginas para o datatable
  const refreshCountPages = (data) => {
    setCountPages(Math.ceil(data.length / itemsPerPage));
  };

  useEffect(() => {
    //filtra os usuarios pelo status selecionado
    if (selectedStatus === "") {
      setListUsers(completedListUsers);
      refreshCountPages(completedListUsers);
    } else {
      let newList = completedListUsers.filter(
        (item) => item.status === selectedStatus
      );
      setListUsers(newList);

      //atualiza quantidade de paginas
      refreshCountPages(newList);
    }
  }, [completedListUsers, selectedStatus]);

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleInativateUser = async () => {
    const completUser = completedListUsers.filter(
      (item) => Number(item.id) === Number(selectedUserId)
    );

    if (completUser.length) {
      completUser[0].status = "Inactive";

      //Altera status para inativado
      const response = await api.put(
        `/users/${selectedUserId}`,
        completUser[0]
      );
      if (response.data) {
        //Fecha o modal
        toggleModal();

        handleShowMessage("Usuário inativado com sucesso !!!");

        //Atualiza lista completa de usuarios
        setUpdate(update + 1);
      }
    } else {
      //Fecha o modal
      toggleModal();
    }
  };

  const toggleModal = () => {
    //abre ou fecha o modal
    setModal(!modal);
  };

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>Usuários</CCardHeader>
          <CCardBody>
            {!loading ? (
              <>
                <CFormGroup row style={{ alignItems: "center" }}>
                  <CCol md="3">
                    <CButton
                      color="primary"
                      className="m-2"
                      onClick={() => history.push("/newuser")}
                    >
                      + Add
                    </CButton>
                  </CCol>

                  <CCol md="4" style={{ alignItems: "center" }}>
                    <CFormGroup row style={{ alignItems: "center", margin: 0 }}>
                      <CLabel htmlFor="selectLg" style={{ margin: 0 }}>
                        Status
                      </CLabel>
                      <CCol xs="12" md="9" size="lg">
                        <CSelect
                          custom
                          size="md"
                          name="selectLg"
                          id="selectLg"
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                          <option value="">Select</option>
                          {usersStatus.map((data) => (
                            <option key={data.id} value={data.description}>
                              {data.description}
                            </option>
                          ))}
                        </CSelect>
                      </CCol>
                      <i style={{ fontSize: 16 }} className="cil-filter"></i>
                    </CFormGroup>
                  </CCol>

                  <CCol md="5">
                    <CInput
                      type="text"
                      id="text-search"
                      name="txt-search"
                      placeholder="Search..."
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                  </CCol>
                </CFormGroup>

                <CDataTable
                  items={listUsers}
                  fields={[
                    { key: "fullname", _classes: "font-weight-bold" },
                    "username",
                    "profile",
                    "status",
                    "actions",
                  ]}
                  hover
                  striped
                  itemsPerPage={itemsPerPage}
                  activePage={page}
                  scopedSlots={{
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                    actions: (item) => (
                      <td>
                        <div
                          style={{
                            display: "flex",
                            fontSize: 17,
                            alignItems: "center",
                          }}
                        >
                          <div
                            style={{ cursor: "pointer" }}
                            onClick={() => history.push(`/users/${item.id}`)}
                          >
                            <CIcon name={"cil-pencil"} />
                          </div>
                          <div
                            style={{ cursor: "pointer", marginLeft: 15 }}
                            onClick={() => {
                              setSelectedUserId(item.id);
                              toggleModal();
                            }}
                          >
                            <CIcon name="cil-trash" />
                          </div>
                        </div>
                      </td>
                    ),
                  }}
                />
                <CPagination
                  activePage={page}
                  onActivePageChange={pageChange}
                  pages={Number(countPages) === 0 ? 1 : Number(countPages)}
                  doubleArrows={false}
                  align="center"
                />
                <CAlert show={showMessage} color="info" closeButton>
                  {message}
                </CAlert>
              </>
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

      <>
        <CButton onClick={toggleModal} className="mr-1"></CButton>
        <CModal show={modal} onClose={toggleModal}>
          <CModalHeader closeButton>Inativar Usuário</CModalHeader>
          <CModalBody>Tem certeza que deseja inativar este usuário?</CModalBody>
          <CModalFooter>
            <CButton color="primary" onClick={() => handleInativateUser()}>
              Inativar
            </CButton>{" "}
            <CButton color="secondary" onClick={toggleModal}>
              Cancelar
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    </CRow>
  );
};

export default Users;
