import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../Authentication/firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [profiles, setProfile] = useState([]);
      
useEffect(() => {
      fetch(`http://localhost:5000/profile/${user?.email}`, {
        method: "GET",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setProfile(data);
        });
}, []);
  
  
  
  return (
    <div class="card w-96 shadow-xl">
      {profiles.map((profile) => (
        <div class="card-body">
          <h2 class="card-title">My profile</h2>
          <h2>Name : {profile.name}</h2>
          <h2>email : {profile.email}</h2>
          <h2>Phone : {profile.phone}</h2>
          <h2>Location : {profile.location}</h2>
          <h2>Education : {profile.edu}</h2>
          <h2>LinkIn profile link : {profile.linked}</h2>

          <Link to={`/update/${profile._id}`}>
            <button className="btn ">Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyProfile;
