import React from "react";
import 'chart.js'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
function ChartSketch() {
  return (
    <div>
      <Line
      datasetIdKey="id"
      width={400}
      height={200}
     data = {{
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",'July','August','September','October','November','December'],
    datasets: [
      {
        label: "Daily Profit",
        data: [33, 53, 85, 41, 44,33, 53, 85, 41, 44, 65,98],
        fill: true,
        backgroundColor: "#fa4b0c14",
        borderColor: "#F04B0C",
        tension:0.4
      },
      {
        label: "Week Earnings",
        data: [33, 53, 65, 21, 44,33, 73, 95, 20, 60, 15,48],
        fill: false,
        borderColor: "#742774",
        tension:0.4
      }
    ]
     }}
      />
    </div>
  );
}
export default ChartSketch; 