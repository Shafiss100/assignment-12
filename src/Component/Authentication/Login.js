import React from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./firebase.init";

const Login = () => {
     const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, euser, eloading, Eerror] =
    useSignInWithEmailAndPassword(auth);

  const emailLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="h-screen">
      <div className="card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto lg:my-20 sm:my-10">
        <div className="card-body">
          <form onSubmit={emailLogin}>
            <h1 className="text-2xl">Log in</h1>
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
                <Link to={"/signup"} className="label-text-alt link link-hover">
                  create an acount
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type={"submit"}
                value={"login"}
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">continew with google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
