import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";

function ReferenceTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://newerver.herokuapp.com/newslist")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  const listSentiment = [];
  data.forEach((d) => {
    if (!listSentiment.includes(d.sentiment)) {
      listSentiment.push(d.sentiment);
    }
  });
  console.log(listSentiment);

  const listEntity = [];
  data.forEach((d) => {
    if (!listEntity.includes(d.entity)) {
      listEntity.push(d.entity);
    }
  });
  console.log(listEntity);

  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>Headlines</th>
            <th>Sentiments</th>
            <th>Entity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.news_headline}</td>
              <td>{item.sentiment}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ReferenceTable;
