import React from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import { Container, Row, Col, Button } from "react-bootstrap";

function UserList({ users, setUsers, filteredUsers }) {
  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const users_array =
    filteredUsers && filteredUsers.length > 0 ? filteredUsers : users;

  return (
    <Container>
      {/* Heading Section */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1 className="text-primary">User List</h1>
        <Link to="/create">
          <Button variant="success" size="lg">
            Add User
          </Button>
        </Link>
      </div>

      {/* User Cards Section */}
      <Row>
        {users_array.map((user) => (
          <Col xs={12} sm={6} md={4} lg={3} key={user.id} className="mb-4">
            <UserCard user={user} handleDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserList;
