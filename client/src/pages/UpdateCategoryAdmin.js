import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router";

import NavbarAdmin from "../components/NavbarAdmin";

import dataCategory from "../fakeData/category";

// Get API config here ...

export default function UpdateCategoryAdmin() {
  const title = "Category admin";
  document.title = "DumbMerch | " + title;

  let history = useHistory();
  const { id } = useParams();

  // Create Variabel for store category data here ...

  // Create function get category data by id from database here ...

  // Call function get category data by id with useEffect didMount here ...

  const handleChange = (e) => {
    setCategory({
      ...category,
      name: e.target.value,
    });
  };

  // Create function for handle submit data ...

  return (
    <>
      <NavbarAdmin title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Edit Category</div>
          </Col>
          <Col xs="12">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                value={category.name}
                placeholder="category"
                className="input-edit-category mt-4"
              />
              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Save
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
