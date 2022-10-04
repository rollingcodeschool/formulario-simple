import FormularioSimple from "./components/FormularioSimple";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

function App() {
  return (
    <Container className="my-5">
      <FormularioSimple></FormularioSimple>
    </Container>
  );
}

export default App;
