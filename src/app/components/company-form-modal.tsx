"use client";
import Form from "./form";
import Modal from "./modal";
import styled from "../page.module.css";

const CompanyFormModal = ({ onSubmit, onClose, show, ...rest }) => {
  return (
    <Modal show={show} onClose={onClose} {...rest}>
      <Form onSubmit={onSubmit} />
    </Modal>
  );
};

export default CompanyFormModal;
