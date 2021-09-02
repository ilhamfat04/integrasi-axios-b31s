import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";

import Navbar from "../components/Navbar";

import dataProduct from "../fakeData/product";

export default function Product() {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let data = dataProduct.find((item) => item.id == id);
    setProduct(data);
    setTimeout(() => {
      console.log(product);
      console.log("halo");
    }, 2000);
  }, [id]);

  return (
    <div>
      <Navbar />
      <Container className="py-5">
        <Row>
          <Col md="2"></Col>
          <Col md="3">
            <img src={product.url} className="img-fluid" alt={product.name} />
          </Col>
          <Col md="5">
            <div className="text-header-product-detail">{product.name}</div>
            <div className="text-content-product-detail">Stock : {product.stock}</div>
            <div className="text-content-product-detail mt-4">
              - Wirelles Mouse <br />- Konektivitas
            </div>
            <p className="text-content-product-detail mt-4">{product.desc}</p>
            <div className="text-price-product-detail text-end mt-4">{convertRupiah.convert(product.price)}</div>
            <div className="d-grid gap-2 mt-5">
              <button className="btn btn-buy">Buy</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
