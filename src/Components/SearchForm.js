import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(str);
    e.target.reset();
  };
  return (
    <div>
      <h1 className="text-center">My Movie List</h1>
      <Form onSubmit={formSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              placeholder="Search movie name.."
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
