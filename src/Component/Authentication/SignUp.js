import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "./firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  // const [errors, setError] = useState("");

  const [
    createUserWithEmailAndPassword,
    signupUser,
    Signuploading,
    signupError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // if (error || signupError || updateError) {
  //   setError(error|| signupError || updateError);
  // }
  // console.log(errors);

  const emailSignup = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    await fetch("https://warm-temple-42525.herokuapp.com/user", {
      method: "POST",
      body: JSON.stringify({
        name: displayName,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="h-screen">
      <div className="card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto lg:my-20 sm:my-10">
        <div className="card-body">
          <form onSubmit={emailSignup}>
            <h1 className="text-2xl">Sign up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />

              <label className="label">
                <Link to={"/login"} className="label-text-alt link link-hover">
                  already have an acount acount
                </Link>
              </label>
              {/* <label htmlFor={errors}>p{errors.message}</label> */}
            </div>
            <div className="form-control mt-6">
              <input
                type={"submit"}
                value={"sign up"}
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
