import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../useAuth';
import { useForm } from 'react-hook-form';



const PlaceOrder = () => {
    const [singlepackage, setSinglePackage] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const {uid}=user;
    const { id } = useParams();
    useEffect(() => {
      fetch(`http://localhost:5000/packages/${id}`)
        .then((res) => res.json())
        .then((data) => setSinglePackage(data));
    }, []);
    const { name, duration, price, img, description } = singlepackage;
    console.log(singlepackage);

    const onSubmit = (data) => {
      const pending='Pending';
      const userId=uid;
      data.singlepackage=singlepackage;
      data.orderStatus=pending;
      data.userId=userId;
      console.log(data);
      fetch(`http://localhost:5000/bookings`, {
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
          <div className="container border border-1 rounded my-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("fullName", { required: true })}
                defaultValue={user.displayName}
              />

              <input
                {...register("email", { required: true })}
                defaultValue={user.email}
              />

              <input
                {...register("address", { required: true })}
                placeholder="Address..."
              />

              <input
                type="number"
                {...register("phone", { required: true })}
                placeholder="Phone..."
              />
              <input
                type="submit"
                value="Confirm Booking"
                className="booktrip-btn"
              />
            </form>
          </div>
        </div>
      </div>
    );
};

export default PlaceOrder;