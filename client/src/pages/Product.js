import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Masonry from "react-masonry-css";
import { Container, Row, Col } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import Navbar from "../components/Navbar";
import ProductCard from "../components/card/ProductCard";

import imgEmpty from "../assets/empty.svg";

// Get API config here ...
import { API } from "../config/api";

export default function Product() {
  const title = "Shop";
  document.title = "DumbMerch | " + title;

  // Create Variabel for store product data here ...
  const [products, setProduct] = useState([])

  // Create function get products data from database here ...
  const getroducts = async () => {
    try {
      const response = await API.get("/products")
      setProduct(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  // Call function get products with useEffect didMount here ...
  useEffect(() => {
    getroducts()
  }, [])

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <div>
      <Navbar title={title} />
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="text-header-product">Product</div>
          </Col>
        </Row>
        <Row className="my-4">
          {products.length !== 0 ? (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {products?.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))}
            </Masonry>
          ) : (
            <Col>
              <div className="text-center pt-5">
                <img src={imgEmpty} className="img-fluid" style={{ width: "40%" }} alt="empty" />
                <div className="mt-3">No data product</div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
