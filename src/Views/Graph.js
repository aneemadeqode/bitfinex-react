import "../App.css";
import Chart from "react-apexcharts";
import axios from "axios";
import { useEffect, useState } from "react";

const Graph = () => {
  const [series, setSeries] = useState([]);

  const loadData = async () => {
    const result = await axios.get(
      "https://api-pub.bitfinex.com/v2/tickers/hist?symbols=tBTCUSD"
    );
    const data = result?.data;
    console.log(data, "data");
    let list = [];
    data.map((v) => {
      list.push({
        x: new Date(v[12]),
        y: [v[1], v[3],v[1], v[3]],
      });
    });

    console.log(list)

    setSeries([{ name: "candle", data: list }]);
  };

  useEffect(() => {
    loadData();
  }, []);

 
  const options = {
    chart: {
      height: 1000,
      type: "candlestick",
    },
    title: {
      text: "CandleStick Chart - Category X-axis",
      align: "left",
    },
    annotations: {
      xaxis: [
        {
          x: "Oct 06 14:00",
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              fontSize: "12px",
              color: "#fff",
              background: "#00E396",
            },
            orientation: "horizontal",
            offsetY: 7,
            text: "Annotation Test",
          },
        },
      ],
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      // type: 'category',
      // labels: {
      //   formatter: function(val) {
      //     return (val).format('MMM DD HH:mm')
      //   }
      // }
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="container">
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default Graph;
