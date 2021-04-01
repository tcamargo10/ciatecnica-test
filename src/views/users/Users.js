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
} from "@coreui/react";

import { usersData, usersStatus } from "./UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Ativo":
      return "success";
    case "Inativo":
      return "secondary";
    case "Pendente":
      return "warning";
    case "Banido":
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
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  const itemsPerPage = 5;

  useEffect(() => {
    setCompletedListUsers(usersData);
    setListUsers(usersData);
  }, []);

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleFilterStatus = (value) => {
    setSelectedStatus(value);

    //retorna para a pagina 1
    pageChange(1);

    //filtra os usuarios pelo status selecionado
    if (value === "") {
      setListUsers(completedListUsers);
    } else {
      let newList = completedListUsers.filter((item) => item.status === value);
      setListUsers(newList);
    }
  };

  const handleInativateUser = () => {
    //Altera status para inativado
    const newList = completedListUsers.map((data) => {
      if (Number(data.id) === Number(selectedUserId)) {
        const updatedItem = {
          ...data,
          status: "Inativo",
        };
        return updatedItem;
      }
      return data;
    });

    //Atualiza lista completa de usuarios
    setCompletedListUsers(newList);

    //Atualiza lista de usuarios que é exibida no datatable
    handleFilterStatus(selectedStatus);

    //Fecha o modal
    toggleModal();
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
            <CFormGroup row style={{ alignItems: "center" }}>
              <CCol md="3">
                <CButton color="primary" size={20} className="m-2">
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
                      onChange={(e) => handleFilterStatus(e.target.value)}
                    >
                      <option value="">Selecione</option>
                      {usersStatus.map((data) => (
                        <option key={data.id} value={data.description}>
                          {data.description}
                        </option>
                      ))}
                    </CSelect>
                  </CCol>
                  <i style={{ fontSize: 16 }} class="cil-filter"></i>
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
                { key: "name", _classes: "font-weight-bold" },
                "username",
                "role",
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
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
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
                        <i class="cil-pencil"></i>
                      </div>
                      <div
                        style={{ cursor: "pointer", marginLeft: 15 }}
                        onClick={() => {
                          setSelectedUserId(item.id);
                          toggleModal();
                        }}
                      >
                        <i class="cil-trash"></i>
                      </div>
                    </div>
                  </td>
                ),
              }}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
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
