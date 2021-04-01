import React from "react";
import { Content, Sidebar, Footer, Header } from "../../components/index";

const ContainerDashboard = () => {
  return (
    <div className="c-app c-default-layout">
      <Sidebar />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContainerDashboard;
