import React from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import { format } from "date-fns";
interface TableTotalProps {
  data: any;
}

export default function TableClient({ data }: TableTotalProps) {
  console.log("🚀 ~ file: TableClient.tsx ~ line 10 ~ TableClient ~ data", data)
  return (
    <Box>
      {data.map((item: any) => (
        <Table key={item.id} striped bordered hover>
          <thead>
            <tr>
              <th className="th-thead">Nº do Container</th>
              <th className="th-thead">Status</th>
              <th className="th-thead">Tipo de Container</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.id}>
              <td>{item.number}</td>
              <td>{item.status}</td>
              <td>{item.type}</td>
            </tr>
            {item.movimentations.length > 0 ? (
              <tr className="tr-movimentation">
                <th>Movimentações</th>
                <th>Data de Início</th>
                <th>Data de Término</th>
              </tr>
            ) : (
              <tr>
                <td>Nenhuma movimentação</td>
              </tr>
            )}
            {item.movimentations.length > 0
              ? item.movimentations.map((value: any) => (
                  <tr key={value.id}>
                    <td className="movimentation-item">{value.type}</td>
                    <td  className="movimentation-item">{format(new Date(value.date_start), "dd/MM/yyyy HH:mm")}</td>
                    <td  className="movimentation-item">{format(new Date(value.date_end), "dd/MM/yyyy HH:mm")}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      ))}
    </Box>
  );
}


export const Box = styled.div`
  margin-top: 60px;

  td,
  th {
    text-transform: uppercase;
  }
  thead {
    background-color: #5c9cfa;
    color: #fff;
  }
  .tr-movimentation {
    background-color: #5c9bfa30;
  }
  .movimentation-item{
    font-size:14px;
  }
`;
