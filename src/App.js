import "./App.css";
import { Header } from "./header/header";
import { Main } from "./Main/Main";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Container fluid>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
