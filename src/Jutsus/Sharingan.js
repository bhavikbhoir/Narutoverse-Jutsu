import { Col, Row } from "react-bootstrap";

export default function Sharingan() {
  return (
    <div className="Sharingan">
      <Row className="info-wrapper">
        <Col md={12} className="info">
          <h1>Sharingan</h1>
          <p>
            The Sharingan (写輪眼, literally meaning: Copy Wheel Eye, meaning
            (Viz): Mirror Wheel Eye) is the dōjutsu kekkei genkai of the Uchiha
            clan that appears selectively among its members.
            <br />
            <br />
            It is regarded as one of the "Three Great Dōjutsu", the others being
            the Byakugan and the Rinnegan.
            <br />
            <br />
            While its powers originated from Kaguya Ōtsutsuki's Rinne Sharingan,
            its independent form was first manifested by Indra Ōtsutsuki
            (Hagoromo Ōtsutsuki in the anime).
          </p>
        </Col>
        <Col md={12} className="image">
          <img
            className="gif"
            alt="itachi"
            // src="https://media1.tenor.com/images/b777cf5df9f86dc226a4973a98b9e3ba/tenor.gif?itemid=10344428"
            src="https://i.gifer.com/79eB.gif"
          />
        </Col>
      </Row>
    </div>
  );
}
