import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Tools = () => {
   const [tools, settools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltools")
      .then((res) => res.json())
      .then((data) => {
        settools(data);
        console.log(data)
      });
  }, []);
  return (
    <div>
      {tools.map((tools) => (
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
            <div class="card-actions justify-end">
              <button class="btn btn-primary">
                <NavLink to={`/purchase/${tools._id}`}>Purchess</NavLink>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;