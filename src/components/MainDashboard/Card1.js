import React from "react";
import { Card } from "react-bootstrap";
import Card_img from "./img/michael-dziedzic-0XkLAIrknco-unsplash 7.png";

function Card1() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Card_img} />
        <Card.Body>
          <Card.Title>
            Local Government Declarations for Net Zero Carbon Emissions by 2050
          </Card.Title>
          <Card.Text>
            Tomoyuki Tatsumi, Takashi Nakazawa, Keiichi Satoh, Atsushi Nozawa,
            Kazuhiro Ikeda, Susumu Kitagawa, Masako Konishi, Gregory Trencher,
            Keiko Hirao, Koichi Hasegawa
          </Card.Text>
          <a href="/">Read more</a>
        </Card.Body>
      </Card>
    </>
  );
}

export default Card1;
