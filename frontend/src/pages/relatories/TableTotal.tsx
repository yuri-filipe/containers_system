import React from "react";
import Table from "react-bootstrap/Table";
import { Box } from "./TableClient";

interface TableTotalProps {
  data: any;
}

export default function TableTotal({ data }: TableTotalProps) {
  return (
    <Box>
      {data.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome do Cliente</th>
              <th>Qtd. Containers</th>
              <th>Total de Importações</th>
              <th>Total de Exportações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.containers.length}</td>
                <td>
                  {
                    item.containers.filter((value: any) => {
                      return value.category === "importacao";
                    }).length
                  }
                </td>
                <td>
                  {
                    item.containers.filter((value: any) => {
                      return value.category === "exportacao";
                    }).length
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </Box>
  );
}
