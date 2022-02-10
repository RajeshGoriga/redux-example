import { useEffect } from "react";
import { connect } from "react-redux";
import { dipatchGetUsers } from "./Actions";
import Card from 'react-bootstrap/Card'
const Users = (props) => {
  useEffect(() => {
    props.dipatchGetUsers();
  }, []);
  return (
    <>
     <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </>
  );
};

const mapDispatchToProps = {
  dipatchGetUsers,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
