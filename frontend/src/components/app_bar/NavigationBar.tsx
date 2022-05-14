import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Index() {
  const { pathname } = useLocation();

  return (
    <Box>
      {routes.map((value) => (
        <div>
          <Link to={value.to} style={{ textDecoration: "none" }}>
            <text className={pathname === value.to ? "route-selected" : ""}>{value.label}</text>
          </Link>
        </div>
      ))}
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
  width: 450px;
  text {
    color: ${(props) => props.theme.colors.background};
  }
  .route-selected{
    color:#5c9cfa ;
  }
`;
const routes = [
  {
    label: "cadastro",
    to: "/registers",
  },
  {
    label: "movimentações",
    to: "/movimentations",
  },
  {
    label: "relatórios",
    to: "/relatories",
  },
];
