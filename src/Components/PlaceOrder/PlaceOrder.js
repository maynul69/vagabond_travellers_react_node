import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../useAuth";
import { useForm } from "react-hook-form";

const PlaceOrder = () => {
  const [singlepackage, setSinglePackage] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const { uid } = user;
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://nameless-hollows-80731.herokuapp.com/packages/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePackage(data));
  }, []);
  const { name, duration, price, img, description } = singlepackage;
  console.log(singlepackage);

  const onSubmit = (data) => {
    const pending = "Pending";
    const userId = uid;
    data.singlepackage = singlepackage;
    data.orderStatus = pending;
    data.userId = userId;
    console.log(data);
    fetch(`https://nameless-hollows-80731.herokuapp.com/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your Booking Has Been Placed Successfully!!");
          reset();
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
        </Card.Body>
      </Card>
      <div className="form">
        <div className="container  my-5">
          <h2>Please Tell us a little more about you</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="m-2"
                {...register("fullName", { required: true })}
                defaultValue={user.displayName}
              />

              <input
                className="m-2"
                {...register("email", { required: true })}
                defaultValue={user.email}
              />
            </div>

            <div>
              <input
                className="m-2"
                {...register("address", { required: true })}
                placeholder="Address..."
              />

              <input
                className="m-2"
                type="number"
                {...register("phone", { required: true })}
                placeholder="Phone..."
              />
            </div>
            <div>
              <input
                type="submit"
                value="Confirm Booking"
                className="btn mt-2"
                style={{ color: "white", backgroundColor: "#00a99d" }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
