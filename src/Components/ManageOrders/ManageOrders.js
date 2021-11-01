import React, { useEffect, useState } from "react";
import ManageSingleOrder from "./ManageSingleOrder/ManageSingleOrder";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch(`https://nameless-hollows-80731.herokuapp.com/bookings`)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  console.log(allOrders);
  return (
    <div>
      {allOrders.map((singleorder) => (
        <ManageSingleOrder
          key={singleorder._id}
          allOrders={allOrders}
          singleorder={singleorder}
        ></ManageSingleOrder>
      ))}
    </div>
  );
};

export default ManageOrders;
