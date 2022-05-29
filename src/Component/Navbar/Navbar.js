import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../Authentication/firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const { pathname } = useLocation();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/tools"}>Tools</NavLink>
            </li>
            <li>
              <NavLink to={"/payment"}>Payment</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blogs</NavLink>
            </li>
            <li>
              <NavLink to={"/portfolio"}>Portfolio</NavLink>
            </li>

            {user ? (
              <>
                <li>
                  <NavLink to={"/dashboard/profile"}>DashBoard</NavLink>
                </li>
                <li>
                  <button onClick={() => signOut(auth)}>sign out</button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to={"/login"}>login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">AutoEvolution.com</a>
      </div>
      <div className=""></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/tools"}>Tools</NavLink>
          </li>
          <li>
            <NavLink to={"/payment"}>Payment</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>My Portfolio</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink to={"/dashboard/profile"}>DashBoard</NavLink>
              </li>
              <li>
                <button onClick={() => signOut(auth)}>sign out</button>
              </li>
            </>
          ) : (
            <li>
              <NavLink to={"/login"}>login</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="w-full justify-end">
        {pathname.includes("dashboard") && (
          <label
            for="dashboard dower"
            class="btn btn-primary drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        )}
      </div>
    </div>
  );
};

export default Navbar;
