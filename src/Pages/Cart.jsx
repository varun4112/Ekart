import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, removeFromCart } from "../redux/slices/cartSlice";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  // console.log(cartArray);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const getCartTotal= cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2)
  const [total, setTotal] = useState(0);
  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };

  useEffect(() => {
    getCartTotal();
  }, [cartArray]);

  const handleEmpty = () => {
    dispatch(emptyCart());
    alert("order Has Been Placed, Thank You for Purchasing");
    navigate("/");
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <div className="row mt-5 p-5">
        <div className="col-lg-8">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product id</th>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray.length > 0 ? (
                cartArray?.map((products, index) => (
                  <tr>
                    <td>{products.id}</td>
                    <td>{products.title}</td>
                    <td>
                      <img
                        height={150}
                        width={150}
                        style={{ borderRadius: "15px" }}
                        src={products.thumbnail}
                        alt=""
                      />
                    </td>
                    <td>{products.price}$</td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeFromCart(products.id))}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>Nothing to Display</p>
              )}
            </tbody>
          </Table>
        </div>

        <div className="col-lg-4">
          <div className="border rounded shadow p-2 w-100">
            <h2 className="text-primary">Cart Summary</h2>
            <h4>
              Total Products: <span>{cartArray.length}</span>
            </h4>
            <h4>
              Total Amount:<span> $ {total}</span>
            </h4>
            <div className="d-grid">
              <button onClick={handleEmpty} className="btn btn-success">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
