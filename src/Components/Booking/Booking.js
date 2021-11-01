import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Booking = ({ order, signlebooking }) => {
  const { name, duration, price, img, description } = signlebooking;

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch(`https://nameless-hollows-80731.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [setAllOrders]);

  const handleCancel = (id) => {
    fetch(`https://nameless-hollows-80731.herokuapp.com/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Booking Cancelled Succesfully");
          const restOrders = allOrders.filter(
            (singleOrder) => singleOrder._id !== id
          );
          setAllOrders(restOrders);
          //reload the page to see the updated order page, although i have set the dependency

          window.location.reload();
        }
      });
  };

  return (
    <div>
      <Card style={{ width: "18rem", margin: "auto" }} className="mt-5">
        <Card.Body>
          <Card.Img variant="top" src={img} />
          <Card.Title>{name}</Card.Title>
          <Card.Text>cost: {price}</Card.Text>
          <Card.Text>duration: {duration}</Card.Text>
          <Card.Text>{description}</Card.Text>

          <Card.Text>{order.orderStatus}</Card.Text>
          <Button variant="primary" onClick={() => handleCancel(order._id)}>
            Cancel Booking
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Booking;
