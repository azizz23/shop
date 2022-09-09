/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import useCookie from "../../hooks/useCookie";

const OlderModal = () => {
  const [show, setShow] = useState(false);
  const [older, setOlder] = useState(false);
  const [error, setError] = useState("");
  const cookie = useCookie();

  const submitHandelar = () => {
    if (older) {
      cookie.set({ name: "older", value: "true", exDays: "365" });

      return setShow(false);
    }

    setError("You must be over 18");
  };

  useEffect(() => {
    if (cookie.get("older")) return;

    setTimeout(() => setShow(true), 1000);
  }, []);

  return (
    <Modal
      show={show}
      backdrop="static"
      keyboard={false}
      className="select-none"
    >
      <Modal.Header>
        <Modal.Title>Age confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You must be over 21 years old to access the website.</p>

        <Form.Check
          type="switch"
          label="I am more than 21 years"
          checked={older}
          onChange={(e: any) => setOlder(e.target.checked)}
        />

        <p className="text-danger text-end mt-3 fw-bold mb-0">{error}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={submitHandelar} type="submit" variant="success">
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OlderModal;
