import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Scharz",
      image:
        "https://previews.123rf.com/images/artshock/artshock1209/artshock120900045/15221647-imag-of-heart-in-the-blue-sky-against-a-background-of-white-clouds.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
