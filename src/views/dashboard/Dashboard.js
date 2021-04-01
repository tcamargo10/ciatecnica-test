import React from "react";
import Logo from "../../assets/icons/logo-ciatecnica.png";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={Logo}
        alt="logo"
        className="c-sidebar-brand-full"
        style={{
          height: "auto",
          width: 400,
          marginTop: "30%",
          opacity: "0.3",
        }}
      />
    </div>
  );
};

export default Dashboard;
