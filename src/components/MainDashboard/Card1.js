import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Card_img from "./img/michael-dziedzic-0XkLAIrknco-unsplash 7.png";

function Card1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://newerver.herokuapp.com/newslist")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <Card style={{ width: "18rem", display: "flex" }}>
          <Card.Img variant="top" src={Card_img} />
          <Card.Body key={item._id}>
            <Card.Title>{item.news_headline}</Card.Title>
            <Card.Text>{item.news_article}</Card.Text>
            <a href="/">Read more</a>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Card1;
