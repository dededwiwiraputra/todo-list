import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container>
      <Row className="mb-5">
        <Col>
          <AddTodo></AddTodo>
        </Col>
      </Row>
      <Row className="">
        <Col>
          <TodoList></TodoList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
