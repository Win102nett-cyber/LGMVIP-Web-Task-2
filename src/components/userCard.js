import React from "react";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <p>LGMVIP-WebApp-Task2</p>
    </div>
  ) : (
    <div className="row" id="main">
      {users.map((user) => (
        <div className="col-sm-6 col-md-4">
          <div className="details">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <p>ID: {user.id}</p>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;