import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://nameless-hollows-80731.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Package Added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service my-5">
      <h2>Add A Service</h2>
      <form
        className="my-5"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "20rem",
          margin: "auto",
        }}
      >
        <input {...register("key")} type="number" placeholder="key" />
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="name"
        />

        <input
          {...register("duration")}
          type="number"
          placeholder="duration (days)"
        />
        <input type="number" {...register("price")} placeholder="price" />
        <textarea {...register("description")} placeholder="description" />

        <input {...register("img")} placeholder="img url" />
        <input
          style={{ backgroundColor: "#00a99d", color: "white" }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddPackage;
