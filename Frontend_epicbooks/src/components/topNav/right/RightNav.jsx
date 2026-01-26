import React, { useState } from "react";
import { Button, Modal, Form, Col, Container, Row } from "react-bootstrap";
import "./rightnav.css";
import { useUploadFile } from "./hooks/useUploadFile";
import { useBookForm } from "./hooks/useBookForm";

const RightNav = () => {
  const [show, setShow] = useState(false);

  const { file, onChangeFile, uploadFile, loading, error } = useUploadFile(
    `${import.meta.env.VITE_SERVER_URL}/books/upload`,
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { onChange, onSubmit } = useBookForm(
    `${import.meta.env.VITE_SERVER_URL}/books`,
    uploadFile,
    handleClose,
  );

  return (
    <>
      <div className="text-end">
        <Button
          onClick={handleShow}
          className=" text-end btn-load-book display-inline"
        >
          Carica il tuo libro
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carica il tuo libro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit} encType="multipart/form-data">
            <Form.Group>
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci un titolo"
                onChange={onChange}
                name="title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Genere</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il genere"
                onChange={onChange}
                name="category"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Prezzo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il prezzo"
                onChange={onChange}
                name="price"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Copertina</Form.Label>
              <Form.Control type="file" onChange={onChangeFile} name="cover" />
              {loading && <small>...in caricamento</small>}
              {error && <small>{error.message}</small>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Tempo di lettura</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    onChange={onChange}
                    name="value"
                  />
                </Col>
                <Col>
                  <Form.Control type="text" onChange={onChange} name="unit" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Trama</Form.Label>
              <Form.Control type="text" onChange={onChange} name="content" />
            </Form.Group>

            <Button type="submit" className="btn-submit">
              Invia
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RightNav;
