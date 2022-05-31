import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../Authentication/firebase.init";

const Update = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const navigate = useNavigate();
  const updateProfile = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = user.email;
    const phone = event.target.phone.value;
    const location = event.target.location.value;
    const edu = event.target.edu.value;
    const linked = event.target.linked.value;
    fetch(`https://warm-temple-42525.herokuapp.com/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        email,
        phone,
        location,
        edu,
        linked,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          window.confirm("done");
          navigate("/dashboard/profile");
        }
      });
  };
  return (
    <form onSubmit={updateProfile}>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" name="name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" value={user.email} class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone</span>
          </label>
          <input type="text" name="phone" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Location</span>
          </label>
          <input type="text" name="location" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Education</span>
          </label>
          <input type="text" name="edu" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">linkIn link</span>
          </label>
          <input type="text" name="linked" class="input input-bordered" />
        </div>
        <div class="form-control">
          <input type="submit" value={"update"} class="input input-bordered" />
        </div>
      </div>
    </form>
  );
};

export default Update;
