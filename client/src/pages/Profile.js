import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import dateFormat from "dateformat";
import convertRupiah from "rupiah-format";

import Navbar from "../components/Navbar";

import imgDumbMerch from "../assets/DumbMerch.png";

import { UserContext } from "../context/userContext";
import dataTransaction from "../fakeData/transaction";

export default function Profile() {
  const title = "Profile";
  document.title = "DumbMerch | " + title;

  const img =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  const [state] = useContext(UserContext);

  console.log(dataTransaction);
  return (
    <>
      <Navbar title={title} />
      <Container className="mt-5">
        <Row>
          <Col md="6">
            <div className="text-header-product mb-4">My Profile</div>
            <Row>
              <Col md="6">
                <img src={img} className="img-fluid rounded" alt="avatar" />
              </Col>
              <Col md="6">
                <div className="profile-header">Name</div>
                <div className="profile-content">{state.user.name}</div>

                <div className="profile-header">Email</div>
                <div className="profile-content">{state.user.email}</div>

                <div className="profile-header">Phone</div>
                <div className="profile-content">{state.user.phone}</div>

                <div className="profile-header">Gender</div>
                <div className="profile-content">{state.user.gender}</div>

                <div className="profile-header">Address</div>
                <div className="profile-content">{state.user.address}</div>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <div className="text-header-product mb-4">My Transaction</div>
            {dataTransaction.map((item) => (
              <div style={{ background: "#303030" }} className="p-2 mb-1">
                <Container fluid className="px-1">
                  <Row>
                    <Col xs="3">
                      <img
                        src={item.img}
                        alt="img"
                        className="img-fluid"
                        style={{ height: "120px", width: "170px", objectFit: "cover" }}
                      />
                    </Col>
                    <Col xs="6">
                      <div
                        style={{
                          fontSize: "18px",
                          color: "#F74D4D",
                          fontWeight: "500",
                          lineHeight: "19px",
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        className="mt-2"
                        style={{
                          fontSize: "14px",
                          color: "#F74D4D",
                          fontWeight: "300",
                          lineHeight: "19px",
                        }}
                      >
                        {dateFormat(item.date, "dddd, d mmmm yyyy")}
                      </div>

                      <div
                        className="mt-3"
                        style={{
                          fontSize: "14px",
                          fontWeight: "300",
                        }}
                      >
                        Price : {convertRupiah.convert(item.price)}
                      </div>

                      <div
                        className="mt-3"
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Sub Total : {convertRupiah.convert(item.subtotal)}
                      </div>
                    </Col>
                    <Col xs="3">
                      <img src={imgDumbMerch} alt="img" className="img-fluid" style={{ maxHeight: "120px" }} />
                    </Col>
                  </Row>
                </Container>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
