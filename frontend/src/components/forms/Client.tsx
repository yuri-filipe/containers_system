import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import styled from "styled-components";
import { findClient, registerClient } from "../../services/api";

interface IndexProps {
  client: string;
  setClient(value: string): void;
  classInput: string;
  setClassInput(value: string): void;
  setClientId(value: number): void;
  buttonAdd?: boolean;
}

export default function Index({ client, setClient, classInput, setClassInput, setClientId, buttonAdd }: IndexProps) {
  const handleFind = async () => {
    const id = toast.loading("Consultando no banco de dados...");
    const data = await findClient(client);
    if (data) {
      let { code, msg, value } = data;

      if (code === "success") {
        toast.update(id, { render: msg, type: code, isLoading: false, autoClose: 4000 });
        setClassInput("found");
        setClient(value.name);
        setClientId(value.id);
      } else {
        setClassInput("not-found");
        toast.update(id, { render: msg, type: "error", isLoading: false, autoClose: 4000 });
      }
    } else {
      toast.update(id, { render: "Servidor offline", type: "error", isLoading: false, autoClose: 4000 });
    }
  };
  const handleRegister = async () => {
    const id = toast.loading("Salvando no banco de dados...");
    const data = await registerClient(client);
    if (data) {
      let { code, msg, value } = data;

      if (code === "success") {
        toast.update(id, { render: msg, type: code, isLoading: false, autoClose: 4000 });
        setClassInput("found");
        setClient(value.name);
        setClientId(value.id);
      } else {
        setClassInput("not-found");
        toast.update(id, { render: msg, type: "error", isLoading: false, autoClose: 4000 });
      }
    } else {
      toast.update(id, { render: "Servidor offline", type: "error", isLoading: false, autoClose: 4000 });
    }
  };

  return (
    <Box>
      <Form.Group className="mb-3">
        <Form.Label>nome do cliente</Form.Label>
        <div className="group-client">
          <Form.Control
            type="text"
            className={`input-client ${classInput}`}
            value={client}
            onChange={(e) => {
              setClient(e.target.value);
              setClassInput("");
            }}
          />

          <Button
            disabled={classInput !== ""}
            onClick={handleFind}
            style={{ width: "120px", marginLeft: 10, textTransform: "uppercase" }}
          >
            Pesquisar
          </Button>
          {buttonAdd && (
            <Button
              disabled={classInput === "found" || classInput === ""}
              onClick={handleRegister}
              style={{ width: "120px", marginLeft: 10, textTransform: "uppercase" }}
            >
              Adicionar
            </Button>
          )}
        </div>
      </Form.Group>
    </Box>
  );
}

export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  .group-client {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .group-client input {
    width: 100%;
  }
  .input-client.found {
  border: 1px solid #018f01;
}
.input-client.not-found {
  border: 1px solid #d60303;
}
`;
