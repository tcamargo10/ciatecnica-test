import React from "react";
import { CFooter } from "@coreui/react";

const Footer = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ml-1">&copy; 2021 Cia Técnica - Test React.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://thiagocamargocodes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thiago Camargo
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(Footer);
