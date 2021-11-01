import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const ManageSingleOrder = ({ singleorder }) => {
  console.log(singleorder);
  const { fullName, singlepackage, email, orderStatus, _id } = singleorder;
  const { name, duration, price, img, description } = singlepackage;

  // Fetching orders with state
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://nameless-hollows-80731.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  // Delete Order Function
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure you want to delete this Booking??"
    );
    if (proceed) {
      fetch(`https://nameless-hollows-80731.herokuapp.com/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Trip Deleted Successfully!!");
            const restOrders = allOrders.filter((order) => order._id !== id);
            setAllOrders(restOrders);
            // Reloading window for not updating restOrders after calling it though
            window.location.reload();
          }
        });
    }
  };

  // Approve Pending Status
  const handleApprove = (id) => {
    console.log(id);
    const url = `https://nameless-hollows-80731.herokuapp.com/bookings/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleorder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Booking Updated Successfully");
          // For Refreshing Page
          window.location.reload();
        }
      });
  };

  return (
    <div>
      <h3> Order of: {fullName}</h3>
      <p>email:{email}</p>

      <div>
        <Card style={{ width: "18rem", margin: "auto" }} className="mt-5">
          <Card.Body>
            <Card.Img variant="top" src={img} />
            <Card.Title>{name}</Card.Title>

            <Card.Text>cost: {price}</Card.Text>
            <Card.Text>duration: {duration}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{orderStatus}</Card.Text>
            <Button
              style={{
                margin: "5px 0",
                color: "white",
                backgroundColor: "#00a99d",
              }}
              onClick={() => handleApprove(_id)}
            >
              Approve Booking
            </Button>
            <Button
              style={{
                margin: "5px 0",
                color: "white",
                backgroundColor: "#00a99d",
              }}
              onClick={() => handleDelete(_id)}
            >
              Cancel Booking
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ManageSingleOrder;
