import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import Payment from "./Payment";

const Purchase = () => {
    const [tools, setTools] = useState({});
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/purchase?id=${id}`, {})
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);
    const purchaseData = (data) => {
        const email = data.email;
        console.log(email);
    }

  return (
    <div className="flex">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={tools.img} alt="" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{tools.tname}</h2>
          <p>price : {tools.tprice}</p>
          <p>Available Quantity : {tools.tq}</p>
          <p>Minimum order Quantity : {tools.mq}</p>
          <p>Describtion : {tools.des}</p>
        </div>
      </div>
      <form className=" shadow  p-6" onSubmit={handleSubmit(purchaseData)}>
        <legend className="text-2xl my-2">Fullful this form </legend>
        <label className="label">
          <span className="label-text">email</span>
        </label>
        <input
          type="text"
          {...register("email")}
          class="input mb-2 input-bordered input-accent w-full "
        />
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="text"
          {...register("phone")}
          class="input mb-2 input-bordered input-accent w-full "
        />
        <label className="label">
          <span className="label-text">Order Quantity</span>
        </label>
        <input
          type="text"
          {...register("orderQuantity")}
          class="input mb-2 input-bordered input-accent w-full "
        />

        <label for="payment-modal" class="btn modal-button">
          open modal
        </label>
      </form>
      

      <input type="checkbox" id="payment-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="payment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <Payment></Payment>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
