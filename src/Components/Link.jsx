import React from "react";
import { Button } from "react-bootstrap";

export default function Link(props) {
  return (
    <div
      style={{
        border: "2px solid blue",
        width: "700px",
        margin: "10px auto",
        padding: "10px",
      }}
    >
      <h1>{props.name}</h1>
      <h2>{props.link}</h2>
      
      <Button
        style={{ margin: "5px" }}
        variant="primary"
        onClick={() => props.handleEdit(props.index)}
      >
        Edit
      </Button>
      <Button
        style={{ margin: "5px" }}
        variant="danger"
        onClick={() => props.handleDelete(props.index)}
      >
        Delete
      </Button>
    </div>
  );
}