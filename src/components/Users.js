import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = async () => {
    const response = await fetch(url);
    const usersData = await response.json();
    setUsers(usersData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <article>
      <h2>Github users fetch</h2>;
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url, type } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
                <h4>User type: {type}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Users;
