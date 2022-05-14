import { ThemeProvider } from "styled-components";
import { ThemeProvider as ThemeProviderBootstrap } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainRoute from "./routes/Routes";
import ligth from "./styles/light";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider theme={ligth}>
      <ThemeProviderBootstrap breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
        <BrowserRouter>
          <MainRoute />
          <ToastContainer style={{marginTop:52}} />
        </BrowserRouter>
      </ThemeProviderBootstrap>
    </ThemeProvider>
  );
}

export default App;
