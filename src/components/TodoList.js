import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";

const TodoList = () => {
  const [data, setData] = useState([{}]);

  const getData = async () => {
    await axios
      .get("http://localhost:3001/posts")
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const TodoListView = () => {
    return data.map((todo) => {
      return (
        <tr>
          <td>{todo.todo_list}</td>
          <td>
            <Button variant="danger" onClick={() => handleDelete(todo.id)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3001/posts/" + id).then((res) => {
      alert("Data Delete Successfull");
      window.location.reload(false);
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>What To Do</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <TodoListView></TodoListView>
      </tbody>
    </Table>
  );
};

export default TodoList;
