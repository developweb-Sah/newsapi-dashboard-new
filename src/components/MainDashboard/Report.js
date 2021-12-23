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
  ChartCategoryAxisTitle,
} from "@progress/kendo-react-charts";

const Report = () => {
  const [data, setData] = useState([]);
  const [charData, setChartData] = useState([]);
  const [positive, setPositive] = useState([]);
  const [negative, setNegative] = useState([]);

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
  const [firstSeries, secondSeries] = [[{ positive }], [{ negative }]];
  console.log(positive, 123);
  const categories = ["Q1", "Q2", "Q3", "Q4"];

  useEffect(() => {
    fetch("https://newerver.herokuapp.com/newslist")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);

        let positiveData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === "POSITIVE");

        setPositive(positiveData?.length);
        console.log(positiveData, 11);

        let negativeData =
          response?.data &&
          !!response?.data.length &&
          response?.data.filter((item) => item?.label === "NEGATIVE");
        setNegative(negativeData?.length);
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
  console.log(listSentiment);

  const listYear = [];
  data.forEach((d) => {
    console.log(d.created_on.substring(0, 4));
    if (!listYear.includes(d.created_on.substring(0, 4))) {
      listYear.push(d.created_on.substring(0, 4));
    }
  });

  const listMonth = [];
  data.forEach((d) => {
    console.log(d.created_on.substring(0, 4));
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
            {/* <Chart
              style={{
                height: 350,
              }}
            >
              <ChartTitle text="Column Chart" />
              <ChartLegend position="top" orientation="horizontal" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={listMonth} startAngle={45} />
              </ChartCategoryAxis>
              <ChartSeries>
                <ChartSeriesItem
                  key={data._id}
                  type="bar"
                  stack={true}
                  // positive={positive}
                  // negative={negative}
                  data={negative}
                />
                <ChartSeriesItem
                  key={data._id}
                  type="bar"
                  stack={true}
                  // positive={positive}
                  // negative={negative}
                  data={positive}
                />
              </ChartSeries>
            </Chart> */}

            <Chart>
              <ChartTitle text="Units sold" />
              <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories}>
                  <ChartCategoryAxisTitle text="Months" />
                </ChartCategoryAxisItem>
              </ChartCategoryAxis>
              <ChartSeries>
                <ChartSeriesItem
                  type="bar"
                  gap={2}
                  spacing={0.25}
                  data={firstSeries}
                />
                <ChartSeriesItem type="bar" data={secondSeries} />
                {/* <ChartSeriesItem type="bar" data={thirdSeries} />
                <ChartSeriesItem type="bar" data={fourthSeries} /> */}
              </ChartSeries>
            </Chart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
