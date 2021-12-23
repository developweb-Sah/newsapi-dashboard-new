import * as React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { useState, useEffect } from "react";
import "../../App.css";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";

const Report = () => {
  const [data, setData] = useState([]);
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);

  const columns = [
    { title: "Year", field: "dictionary_token" },
    { title: "Chart", field: "sentiment" },
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const entity = [
    "PERSON",
    "DATE",
    "ORG",
    "GPE",
    "CARDINAL",
    "NORP",
    "PRODUCT",
    "LOC",
    "TIME",
  ];

  const partners = ["AWS", "Google", "IBM", "Microsoft"];

  const technology = ["AI", "Blockchain"];

  // console.log(positive, 123);
  const categories = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const series = [
    {
      data: [
        positive,
        positive,
        positive,
        positive,
        positive,
        positive,
        positive,
        positive,
        positive,
        positive,
        positive,
        positive,
      ],
    },
    {
      data: [
        negative,
        negative,
        negative,
        negative,
        negative,
        negative,
        negative,
        negative,
        negative,
        negative,
        negative,
        negative,
      ],
    },
  ];
  useEffect(() => {
    fetch("https://newerver.herokuapp.com/newslist")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setData(response);

        let positiveData =
          response &&
          !!response?.length &&
          response.filter((item) => item?.sentiment === "POSITIVE");

        setPositive(positiveData?.length);
        console.log(positiveData.length, 11);

        let negativeData =
          response &&
          !!response?.length &&
          response?.filter((item) => item?.sentiment === "NEGATIVE");
        setNegative(negativeData?.length);
        console.log(negativeData.length, 12);

        const userData = [];
        const positiveList = [];
        positiveList.fill(0, 0, 11);
        const negativeList = [];
        negativeList.fill(0, 0, 11);
        for (let i = 0; i < 12; i++) {
          userData.push({
            positive: positiveList[i] ? positiveList[i] : 0,
            negative: negativeList[i] ? negativeList[i] : 0,
          });
        }
      });
  }, []);

  const listCompany = [];
  data.forEach((d) => {
    if (!listCompany.includes(d.dictionary_token)) {
      listCompany.push(d.dictionary_token);
    }
  });

  const listSentiment = [];
  data.forEach((d) => {
    if (!listSentiment.includes(d.sentiment)) {
      listSentiment.push(d.sentiment);
    }
  });
  // if(listSentiment)
  console.log(listSentiment);

  const listYear = [];
  data.forEach((d) => {
    // console.log(d.created_on.substring(0, 4));
    if (!listYear.includes(d.created_on.substring(0, 4))) {
      listYear.push(d.created_on.substring(0, 4));
    }
  });

  const listMonth = [];
  data.forEach((d) => {
    // console.log(d.created_on.substring(0, 4));
    if (!listMonth.includes(d.created_on.substring(5, 6))) {
      listMonth.push(d.created_on.substring(5, 6));
    }
  });

  return (
    <>
      <ComboBox
        data={listYear}
        columns={columns}
        placeholder="Year"
        style={{ padding: "3px" }}
      />
      <ComboBox data={month} placeholder="Month" style={{ padding: "3px" }} />
      <ComboBox data={entity} placeholder="Entity" style={{ padding: "3px" }} />
      <ComboBox
        data={listCompany}
        columns={columns}
        placeholder="Company"
        style={{ padding: "3px" }}
      />
      <ComboBox
        data={technology}
        placeholder="Technology"
        style={{ padding: "3px" }}
      />
      <ComboBox
        data={partners}
        placeholder="Partners"
        style={{ padding: "3px" }}
      />

      {/* Chart   */}
      <div className="row mb-3">
        <div className="col-12">
          <div className="k-card">
            <Chart>
              <ChartTitle text="Column Chart" />
              <ChartLegend position="top" orientation="horizontal" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem
                  categories={categories}
                  startAngle={45}
                />
              </ChartCategoryAxis>
              <ChartSeries>
                {series.map((item, idx) => (
                  <ChartSeriesItem
                    key={idx}
                    type="column"
                    tooltip={{
                      visible: true,
                    }}
                    stack={true}
                    data={item.data}
                    name={item.name}
                  />
                ))}
              </ChartSeries>
            </Chart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
