import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

const AddTodo = () => {
  const [FormData, setFormData] = useState({
    todo_list: "",
  });

  const handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:3001/posts", FormData);

    if (response) {
      alert("Todo List Submitted Successfully");
      window.location.reload(false);
    } else {
      alert("Submit Todo List Failed");
      window.location.reload(false);
    }

    setFormData({
      todo_list: "",
    });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col className="px-5 py-2">
          <p className="fw-bold fs-1 text-center">Todo List App</p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Input Todo List"
              aria-label="Input Todo List"
              aria-describedby="basic-addon2"
              type="text"
              id="todo_list"
              value={FormData.todo_list}
              onChange={(e) =>
                setFormData({
                  ...FormData,
                  todo_list: e.target.value,
                })
              }
            />
            <Button
              variant="primary"
              id="button-add"
              onClick={handleFormSubmit}
            >
              Add
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AddTodo;
