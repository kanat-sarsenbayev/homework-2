import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const hangleDelete = (userID) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userID));
  };

  const renderPhrase = (number) => {
    return (
      users.length !== 0 && (
        <span className="badge bg-primary">
          {number} человек тусанет с тобой сегодня
        </span>
      )
    );
  };

  if (users.length === 0) {
    return (
      <div>
        <h2>
          <span className="badge bg-danger"> Никто с тобой не тусанет </span>
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{renderPhrase(users.length)}</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td> {user.name}</td>
              <td>
                {user.qualities.map((qname) => (
                  <span
                    key={qname._id}
                    className={`badge bg-${qname.color} m-1`}
                  >
                    {qname.name}
                  </span>
                ))}
              </td>
              <td> {user.profession.name}</td>
              <td> {user.completedMeetings}</td>
              <td> {user.rate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => hangleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
