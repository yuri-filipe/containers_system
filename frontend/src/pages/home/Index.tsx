import styled from "styled-components";
import { Routes, Route, Outlet } from "react-router-dom";
import AppBar from "../../components/app_bar/Index";
import Registers from "../registers/Index";
import Movimentations from "../movimentations/Index";
import Relatories from "../relatories/Index";
export default function Index() {
  return (
    <>
      <AppBar />
      <Main />
    </>
  );
}

const Main = () => {
  return (
    <Box>
      <Outlet />
      <Routes>
        <Route path="/" element={<Registers />} />
        <Route path="/registers" element={<Registers />} />
        <Route path="/movimentations" element={<Movimentations />} />
        <Route path="/relatories" element={<Relatories />} />
      </Routes>
    </Box>
  );
};

const Box = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
