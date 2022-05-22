import React from 'react';

const SignUp = () => {
    return (
      <div className="h-screen">
        <div class="card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto lg:my-20 sm:my-10">
          <div class="card-body">
            <h1 className="text-2xl">Sign up</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">User name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">log in with google</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;