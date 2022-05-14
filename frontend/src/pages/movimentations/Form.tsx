import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

import ContainerNumber from "../../components/forms/ContainerNumber";
import { registerContainer, registerMovimentation } from "../../services/api";

import { Box } from "../registers/styles";
import DateAndTime from "./DateAndTime";

export default function Index() {
  const [classInput, setClassInput] = useState("");
  const [containerId, setContainerId] = useState(0);
  const [container, setContainer] = useState("");
  const [type, setType] = useState("embarque");
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  const handleSubmit = async () => {
    const id = toast.loading("Salvando no banco de dados...");
    const data = await registerMovimentation({
      container_id: containerId,
      number: container,
      type,
      date_start: dateStart,
      date_end: dateEnd,
    });
    if (data) {
      let { code, msg } = data;

      if (code === "success") {
        toast.update(id, { render: msg, type: code, isLoading: false, autoClose: 4000 });
        setClassInput("");
        setContainer("");
        setType("embarque");
        setDateStart(new Date());
        setDateEnd(new Date());
      } else {
        toast.update(id, { render: msg, type: "error", isLoading: false, autoClose: 4000 });
      }
    } else {
      toast.update(id, { render: "Servidor offline", type: "error", isLoading: false, autoClose: 4000 });
    }
  };

  return (
    <Box>
      <Form className="form">
        <ContainerNumber
          container={container}
          setContainer={setContainer}
          classInput={classInput}
          setClassInput={setClassInput}
          setContainerId={setContainerId}
        />
        <Form.Group className="mb-3">
          <Form.Label>tipo de movimentação</Form.Label>
          <Form.Select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="embarque">embarque</option>
            <option value="descarga">descarga</option>
            <option value="gate in">gate in</option>
            <option value="gate out">gate out</option>
            <option value="pesagem">pesagem</option>
            <option value="reposicionamento">reposicionamento</option>
            <option value="scanner">scanner</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>tempo de inicio</Form.Label>
          <DateAndTime date={dateStart} setDate={setDateStart} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>tempo do fim</Form.Label>
          <DateAndTime date={dateEnd} setDate={setDateEnd} />
        </Form.Group>
        <Button
          disabled={classInput !== "found"}
          onClick={handleSubmit}
          style={{ width: "100%", height: 40, textTransform: "uppercase" }}
        >
          enviar
        </Button>
      </Form>
    </Box>
  );
}
