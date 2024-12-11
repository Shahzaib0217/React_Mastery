import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UserCard({ user, handleDelete }) {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Body>
        <Card.Title>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </Card.Title>
        <Button variant="danger" onClick={() => handleDelete(user.id)}>
          Delete
        </Button>
        <Link to={`/edit/${user.id}`} className="btn btn-warning pr-2">
          Edit
        </Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
