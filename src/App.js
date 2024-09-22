import React from "react";
import Name from "./component/Name";
import Price from "./component/Price";
import Description from "./component/Description";
import Image from "./component/Image";
import { Card, Button } from "react-bootstrap";

const App = () => {
  return (
    <Card style={{ width: "20rem" }}>
      <Image />
      <Card.Body>
        <Card.Title>
          <Name />
        </Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        <Price />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default App;
