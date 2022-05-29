import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../Authentication/firebase.init";

const Addtools = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const api = "f182c9961424494546ab8f4bd3268f89";

  const toolsdata = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    const url = `https://api.imgbb.com/1/upload?key=${api}`;
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const tname = data.tname;
          const tprice = data.tprice;
          const tq = data.tq;
          const mq = data.mq;
          const des = data.des;
          fetch("http://localhost:5000/tools", {
            method: "POST",
            body: JSON.stringify({
              img,
              tname,
              tprice,
              tq,
              mq,
              des,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
  };
  return (
    <form className=" w-[50%] shadow  p-6" onSubmit={handleSubmit(toolsdata)}>
      <legend className="text-2xl my-2">Add tools form </legend>
      <label className="label">
        <span className="label-text">Tools Name</span>
      </label>
      <input
        type="text"
        {...register("tname")}
        class="input mb-2 input-bordered input-accent w-full "
      />
      <label className="label">
        <span className="label-text">Tools price</span>
      </label>
      <input
        type="text"
        {...register("tprice")}
        class="input mb-2 input-bordered input-accent w-full "
      />
      <label className="label">
        <span className="label-text">Total Quantity</span>
      </label>
      <input
        type="text"
        {...register("tq")}
        class="input mb-2 input-bordered input-accent w-full "
      />
      <label className="label">
        <span className="label-text">Minimum Quantity</span>
      </label>
      <input
        type="text"
        {...register("mq")}
        class="input mb-2 input-bordered input-accent w-full "
      />
      <label className="label">
        <span className="label-text">Short description</span>
      </label>
      <textarea
        {...register("des")}
        className="bg-purple-100 rounded mb-2 w-full"
      ></textarea>
      <label className="label">
        <span className="label-text">upload image</span>
      </label>
      <input type="file" {...register("image")} />

      <button type="submit" href="#" class="btn btn-primary mt-5">
        Post
      </button>
    </form>
  );
};

export default Addtools;
