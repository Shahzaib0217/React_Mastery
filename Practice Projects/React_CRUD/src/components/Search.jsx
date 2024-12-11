import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

function Search({ users, setFilteredUsers }) {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    // Filter the users using the search term
    const filteredItems = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <Form className="m-4">
      <InputGroup>
        <FormControl
          type="text"
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Search users..."
          aria-label="Search users"
        />
      </InputGroup>
    </Form>
  );
}

export default Search;
