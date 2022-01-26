import React, { useEffect, useState } from "react";
import "../styles/users.css";

const url = "https://api.github.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchUserData = async () => {
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 299) {
      const usersData = await response.json();
      setIsLoading(false);
      setUsers(usersData);
    } else {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <article>
        <h1> Data is loading... </h1>
      </article>
    );
  }
  if (isError) {
    return (
      <article>
        <h1> Error happened... :/ </h1>
      </article>
    );
  }

  return (
    <article>
      <h2>Github users fetch</h2>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url, type } = user;
          return (
            <li className="user" key={id}>
              <img className="user-img" src={avatar_url} alt={login} />
              <div>
                <h4 className="user-name">{login}</h4>
                <a className="user-link" href={html_url}>
                  Profile
                </a>
                <h4 id="user-type">
                  User type: <span>{type}</span>
                </h4>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Users;
