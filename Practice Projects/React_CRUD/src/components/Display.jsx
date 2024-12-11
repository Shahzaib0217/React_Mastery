import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import Search from "./Search";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL).then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      <Search
        users={users}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
      />
      <UserList
        users={users}
        setUsers={setUsers}
        filteredUsers={filteredUsers}
      />
    </>
  );
}

export default App;
