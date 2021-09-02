import { useHistory, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { UserContext } from "../context/userContext";

import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

import Img1 from "../../src/assets/product1.png";
import Img2 from "../../src/assets/product2.png";

import dataProduct from "../fakeData/product";

import convertRupiah from "rupiah-format";

export default function Shop() {
  let history = useHistory();

  const [products, setProducts] = useState([]);
  const [state] = useContext(UserContext);

  const checkAuth = () => {
    if (!state.isLogin) {
      history.push("/auth");
    }
  };
  checkAuth();

  useEffect(() => {
    let data = dataProduct.map((item) => {
      return (
        <Link to={`/product/` + item.id} style={{ textDecoration: "none" }}>
          <div className="card-product mt-3">
            <img src={item.url} className="img-fluid img-rounded" />
            <div className="p-2">
              <div className="text-header-product-item">{item.name}</div>
              <div className="text-product-item">{convertRupiah.convert(item.price)}</div>
              <div className="text-product-item">Stock : {item.stock}</div>
            </div>
          </div>
        </Link>
      );
    });

    setProducts(data);
  }, []);

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
    700: 3,
    500: 2,
  };

  const title = "Shop";
  document.title = "DumbMerch | " + title;

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
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {products}
          </Masonry>
        </Row>
      </Container>
    </div>
  );
}
