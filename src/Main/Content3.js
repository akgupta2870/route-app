import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Component1 } from "./Component1";
import { Component2 } from "./Component2";
import { Component3 } from "./Component3";

export function Content3() {
  const [response, setResponse] = useState(1);
  let Method1 = (data) => {
    setResponse(data);
  };
  return (
    <>
      <Row>
        <Col>
          <Component1 result1={Method1} />
        </Col>
        <Col>
          <Component2 result={response} attribute={"comments"} />
        </Col>
        <Col>
          <Component3 />
        </Col>
      </Row>
      <p>
        usestate value .................................. content was edited and
        tailored to the public through news editors, authors, and other kinds of
        content creators. However, not all information content requires creative
        authoring or editing. Through recent technological developments, truth
        is found in philosopher Marshall McLuhan's idea of a global village; new
        technologies allow for instantaneous movement of information from every
        corner to every point at the same time[4] causing the globe to be
        contracted into a village by electric technology,[5] such as smartphones
        and automated sensors. These new technologies can record events anywhere
        for publishing and converting in order to potentially reach a global
        audience through various internet channels such as YouTube. Such
        recorded or transmitted information and visuals can be referred to as
        content. Content is no longer a product of only reputable sources; new
        technology has made primary sources of content more readily available
        to.
      </p>
    </>
  );
}
