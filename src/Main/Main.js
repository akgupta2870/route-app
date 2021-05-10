import { Content3 } from "./Content3";
import { Content } from "./Content";
import { Content2 } from "./Content2";
import { Switch, Route } from "react-router-dom";
import { Card } from "react-bootstrap";
export function Main() {
  return (
    <>
      <Card style={{ flex: 1 }}>
        <Card.Body>
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/Features">
              <Content2 />
            </Route>
            <Route path="/Price">
              <Content3 />
            </Route>
          </Switch>
        </Card.Body>
      </Card>
    </>
  );
}
