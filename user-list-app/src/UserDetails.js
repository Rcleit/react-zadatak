import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div>Učitavanje...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Telefon:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>
      <Link to="/">Natrag na listu korisnika</Link>
    </div>
  );
}

export default UserDetails;
