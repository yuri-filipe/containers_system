import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { Box } from "./Client";
import { findContainer } from "../../services/api";

interface IndexProps {
  container: string;
  setContainer(value: string): void;
  classInput: string;
  setClassInput(value: string): void;
  setContainerId(value: number): void;
}

export default function Index({ container, setContainer, classInput, setClassInput, setContainerId }: IndexProps) {
  const handleFind = async () => {
    const id = toast.loading("Consultando no banco de dados...");
    const data = await findContainer({ number: container });
    if (data) {
      let { code, msg, value } = data;

      if (code === "success") {
        toast.update(id, { render: msg, type: code, isLoading: false, autoClose: 4000 });
        setClassInput("found");
        setContainer(value.number);
        setContainerId(value.id);
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
        <Form.Label>container</Form.Label>
        <div className="group-client">
          <Form.Control
            type="text"
            className={`input client ${classInput}`}
            value={container}
            onChange={(e) => {
              setContainer(e.target.value);
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
        </div>
      </Form.Group>
    </Box>
  );
}
