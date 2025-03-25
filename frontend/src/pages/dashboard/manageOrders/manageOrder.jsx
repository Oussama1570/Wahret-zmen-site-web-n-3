import React from "react";
import AdminManageOrders from "../manageOrders/AdminManageOrders.jsx"; // Import the Admin Orders List component
import AdminOrdersProgress from "./AdminOrdersProgress.jsx";

const ManageOrders = () => {
  return (
    <div>
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-[#A67C52] mb-4">Manage Orders</h2>
      <AdminManageOrders/>
    </div>
    <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold text-center text-[#A67C52] mb-4">Manage Orders Progress</h2>
    <AdminOrdersProgress/>
  </div>
  </div>
  );
};

export default ManageOrders;
