import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";

import Navbar from "../components/Navbar";

import dataProduct from "../fakeData/product";

// Get API config here ...

export default function DetailProduct() {
  let history = useHistory();
  let { id } = useParams();

  // Create Variabel for store product data here ...

  // Create function get product data by id from database here ...

  // Call function get product with useEffect didMount here ...

  
  // This step after fetching product detail data
  // Create handle buy process & insert transaction data to database here ...

  return (
    <div>
      <Navbar />
      <Container className="py-5">
        <Row>
          <Col md="2"></Col>
          <Col md="3">
            <img src={product.image} className="img-fluid" />
          </Col>
          <Col md="5">
            <div className="text-header-product-detail">{product.name}</div>
            <div className="text-content-product-detail">
              Stock : {product.qty}
            </div>
            <p className="text-content-product-detail mt-4">{product.desc}</p>
            <div className="text-price-product-detail text-end mt-4">
              {convertRupiah.convert(product.price)}
            </div>
            <div className="d-grid gap-2 mt-5">
              <button onClick={handleBuy} className="btn btn-buy">
                Buy
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
