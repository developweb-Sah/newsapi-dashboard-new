import * as React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
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

  const columns = [
    { dataField: "news_headline", text: "Headline" },
    { dataField: "sentiment", text: "Sentiment" },
    {
      dataField: "entity[0]",
      text: "entity",
      formatter: (cell, row) => {
        let data = "";
        for (let item in row.entity[0]) {
          data += `${item}: ${row.entity[0][item]},  `;
        }
        return " " + data;
      },
    },
  ];

  return (
    <>
      <div>
        <BootstrapTable
          keyField="news_headline"
          data={data}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    </>
  );
}

export default ReferenceTable;
