import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function AddLink(props) {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>Add New Link</h1>
      <Form>
      <Form.Group className="mb-2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-2" >
        <Form.Label>Paste your Link!</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  
      
      <Button
        variant="success"
        onClick={() => {
          props.addItem(input);
          setInput("");
        }}
      >
        Save Link
      </Button>
    </div>
  );
}