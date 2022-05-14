import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

import Client from "../../components/forms/Client";
import { registerContainer } from "../../services/api";

import { Box } from "./styles";
export default function Index() {
  const [classInput, setClassInput] = useState("");
  const [client, setClient] = useState("");
  const [clientId, setClientId] = useState(0);
  const [container, setContainer] = useState("");
  const [type, setType] = useState("20");
  const [status, setStatus] = useState("cheio");
  const [category, setCategory] = useState("importacao");

  const handleSubmit = async () => {
    const id = toast.loading("Salvando no banco de dados...");
    const data = await registerContainer({ client, client_id: clientId, category, number: container, status, type });
    if (data) {
      let { code, msg } = data;

      if (code === "success") {
        toast.update(id, { render: msg, type: code, isLoading: false, autoClose: 4000 });
        setClassInput("");
        setClient("");
        setStatus("cheio");
        setContainer("");
        setType("20");
        setCategory("importacao");
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
        <Client
          client={client}
          setClient={setClient}
          classInput={classInput}
          setClassInput={setClassInput}
          setClientId={setClientId}
          buttonAdd
        />
        <Form.Group className="mb-3">
          <Form.Label>Nº do container</Form.Label>
          <Form.Control
            type="text"
            value={container}
            onChange={(e) => {
              setContainer(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipo</Form.Label>
          <Form.Select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="20">20</option>
            <option value="40">40</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>status</Form.Label>
          <Form.Select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="cheio">cheio</option>
            <option value="vazio">vazio</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>categoria</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="importacao">importação</option>
            <option value="exportacao">exportação</option>
          </Form.Select>
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
