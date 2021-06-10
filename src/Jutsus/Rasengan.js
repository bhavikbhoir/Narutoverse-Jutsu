import { Col, Row } from "react-bootstrap";

export default function Rasengan() {
  return (
    <div className="Rasengan">
      <Row className="info-wrapper">
        <Col md={12} className="image">
          <img
            className="gif"
            alt="rasengan"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5dc49b69-4635-4a82-8234-eba54971eba0/d8ugrx3-5896be5a-5104-48d3-87cb-0752561e5c17.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVkYzQ5YjY5LTQ2MzUtNGE4Mi04MjM0LWViYTU0OTcxZWJhMFwvZDh1Z3J4My01ODk2YmU1YS01MTA0LTQ4ZDMtODdjYi0wNzUyNTYxZTVjMTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xcubnkARPvBP0ohpzIuGpQn-puQcDl7tYG8bWL6d7u8"
          />
        </Col>
        <Col md={12} className="info">
          <h1>Rasengan</h1>
          <p>
            The Rasengan is a spinning ball of chakra formed and held in the
            palm of the user's hand, which is only known to a handful of
            shinobi.
            <br />
            <br />
            The Rasengan was created by Minato Namikaze, which he based on the
            Tailed Beast Ball. He spent three years creating the Rasengan, which
            he intended to be the highest form of shape transformation.
            <br />
            <br />
            Users: Boruto Uzumaki, Jiraiya, Kakashi Hatake, Konohamaru Sarutobi,
            Minato Namikaze, Momoshiki Ōtsutsuki, Naruto Uzumaki, Hiruko
            (Movie), and Koji Kashin
          </p>
        </Col>
      </Row>
    </div>
  );
}
