import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import useFetch from "../redux/useFetch";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import {addToCart} from "../redux/slices/cartSlice"
function Home() {
  const data = useFetch("https://dummyjson.com/products");
  console.log(data);
  const dispatch = useDispatch();

  return (
    <>
      <Row className="ms-5" style={{ marginTop: "100px" }}>
        {data?.length > 0 ? (
          data?.map((products, index) => (
            <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={products.thumbnail}
                  alt="cart image"
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Text>{products.description}</Card.Text>
                  <Card.Text>Price: ${products.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button
                      variant="primary"
                      className="m-1"
                      onClick={() => dispatch(addToCart(products))}
                    >
                      <i class="fa-solid fa-cart-shopping"></i>Add To Cart
                    </Button>
                    <Button
                      variant="danger"
                      className="m-1"
                      onClick={() => dispatch(addToWishlist(products))}
                    >
                      <i class="fa-solid fa-heart"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Nothing to Display</p>
        )}
      </Row>
    </>
  );
}

export default Home;
