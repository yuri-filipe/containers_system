import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormClient from "../../components/forms/Client";
import { toast } from "react-toastify";
import { generateRelatoriesTotal, generateRelatoriesClient } from "../../services/api";

import { Box } from "../registers/styles";
import TableTotal from "./TableTotal";
import TableClient from "./TableClient";
export default function Index() {
  const [relatoryType, setRelatoryType] = useState("total");
  const [client, setClient] = useState("");
  const [clientId, setClientId] = useState(0);
  const [classInput, setClassInput] = useState("");
  const [category, setCategory] = useState("importacao");

  const [relatories, setRelatories] = useState<any>([]);

  const handleSubmitTotal = async () => {
    let id = toast.loading("Buscando no banco de dados...");

    const data = await generateRelatoriesTotal();
    if (data) {
      let { code, msg, value } = data;
      if (code === "success") {
        setRelatories(value);
        toast.update(id, { render: msg, type: "success", isLoading: false, autoClose: 5000 });
      } else {
        toast.update(id, { render: msg, type: "error", isLoading: false, autoClose: 5000 });
      }
    } else {
      toast.update(id, { render: "Servidor offline", type: "error", isLoading: false, autoClose: 5000 });
    }
  };
  const handleSubmitClient = async () => {
    let id = toast.loading("Buscando no banco de dados...");

    const data = await generateRelatoriesClient({ client_id: clientId, category });
    if (data) {
      let { code, msg, value } = data;
      if (code === "success") {
        setRelatories(value);
        toast.update(id, { render: msg, type: "success", isLoading: false, autoClose: 5000 });
      } else {
        toast.update(id, { render: msg, type: "error", isLoading: false, autoClose: 5000 });
      }
    } else {
      toast.update(id, { render: "Servidor offline", type: "error", isLoading: false, autoClose: 5000 });
    }
  };

  return (
    <Box>
      <Form className="form">
        <Form.Group className="mb-3">
          <Form.Label>Tipo de Relatório</Form.Label>
          <Form.Select aria-label="Categoria" value={relatoryType} onChange={(e) => setRelatoryType(e.target.value)}>
            <option value="total">total</option>
            <option value="client">cliente</option>
          </Form.Select>
        </Form.Group>
        {relatoryType === "client" ? (
          <FormClient
            client={client}
            classInput={classInput}
            setClassInput={setClassInput}
            setClient={setClient}
            setClientId={setClientId}
          />
        ) : null}
        {relatoryType === "client" ? (
          <Form.Group className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="Categoria" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="importacao">importação</option>
              <option value="exportacao">exportação</option>
            </Form.Select>
          </Form.Group>
        ) : null}

        <Button
          disabled={relatoryType === "client" && classInput !== "found"}
          style={{ width: "100%", height: 40, textTransform: "uppercase" }}
          onClick={() => (relatoryType === "total" ? handleSubmitTotal() : handleSubmitClient())}
        >
          Pesquisar
        </Button>

        {relatoryType === "total" ? (
          <TableTotal data={relatories ? relatories : []} />
        ) : (
          <TableClient data={relatories.containers ? relatories.containers : []} />
        )}
      </Form>
    </Box>
  );
}

