import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";

function Whishlist() {
  const dispatch = useDispatch();
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  return (
    <Row className="ms-5" style={{ marginTop: "100px" }}>
      {wishlistArray.length > 0 ? (
        wishlistArray?.map((products, index) => (
          <Col className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card
              className="bg-light"
              style={{ width: "18rem", height: "32rem" }}
            >
              <Card.Img
                style={{ height: "200px" }}
                variant="top"
                src={products.thumbnail}
              />
              <Card.Body>
                <Card.Title className="text-black">{products.title}</Card.Title>
                <Card.Text className="text-dark">
                  {products.description.slice(0, 60)}
                </Card.Text>
                <Card.Text
                  className="text-danger"
                  style={{ fontSize: "30px", fontWeight: "700" }}
                >
                  {products.price}$
                </Card.Text>
                <Button className="btn btn-warning" variant="primary">
                  {" "}
                  <i class="fa-solid fa-cart-shopping fa-bounce"></i> Add to
                  Cart
                </Button>
                <button
                  className="ms-5"
                  variant="primary"
                  onClick={() => dispatch(removeFromWishlist(products.id))}
                  style={{
                    backgroundColor: "transparent",
                    border: "2px transparent",
                  }}
                >
                  {" "}
                  <span className="text-danger">
                    <i class="fa-solid fa-trash"></i>{" "}
                  </span>
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="text-danger fs-4">Nothing to Display</p>
      )}
    </Row>
  );
}

export default Whishlist;
