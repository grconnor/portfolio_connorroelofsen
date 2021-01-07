import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Modal, Button } from "antd";
// import PDF from "react-pdf-js";
import { usePdf } from '@mikecousins/react-pdf';

const PdfViewer = ({ pdf, onCancel, visible }) => {
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      maskClosable={false}
      width={"50%"}
    >
      Hello There!
    </Modal>
  );
};

export default PdfViewer;
