import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
      <div class="drawer drawer-mobile">
        <input id="dashboard dower" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          
          <Outlet></Outlet>
          
        </div>
        <div class="drawer-side">
          <label for="dashboard dower" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <NavLink to={"/dashboard/profile"}>My Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/order"}>My Order</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/addreview"}>Add review</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default DashBoard;