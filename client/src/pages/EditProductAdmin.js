import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router";

import NavbarAdmin from "../components/NavbarAdmin";

import dataProduct from "../fakeData/product";

export default function EditProductAdmin() {
  let history = useHistory();
  const { id } = useParams();

  const [product, setProduct] = useState(dataProduct.find((item) => item.id == id));
  const [file, setFile] = useState(product.url);

  const title = "Product admin";
  document.title = "DumbMerch | " + title;

  console.log(product);

  const handleChange = (e) => {
    // setCategory({
    //     ...category,
    //     name: e.target.value
    // })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/product-admin");
  };

  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <NavbarAdmin title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Edit Product</div>
          </Col>
          <Col xs="12">
            <form onSubmit={handleSubmit}>
              {file && (
                <div>
                  <img src={file} style={{ width: "100px", height: "100px", objectFit: "cover" }} alt={product.name} />
                </div>
              )}
              <input type="file" id="upload" hidden onChange={handleFile} />
              <label for="upload" className="label-file-add-product">
                Upload file
              </label>
              <input value={product.name} type="text" placeholder="Product Name" className="input-edit-category mt-4" />
              <textarea
                value={product.desc}
                placeholder="Product Desc"
                className="input-edit-category mt-4"
                style={{ height: "130px" }}
              ></textarea>
              <input
                value={product.price}
                type="number"
                placeholder="Price (Rp.)"
                className="input-edit-category mt-4"
              />
              <input value={product.stock} type="number" placeholder="Stock" className="input-edit-category mt-4" />
              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Add
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
