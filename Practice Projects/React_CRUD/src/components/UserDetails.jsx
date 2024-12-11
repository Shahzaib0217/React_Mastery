import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users?id=${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user[0].name}</h1>
      <p>Email: {user[0].email}</p>
      <p>Phone: {user[0].phone}</p>
      <p>Address: {user[0].address}</p>
    </div>
  );
}

export default UserDetails;
