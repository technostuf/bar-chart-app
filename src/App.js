import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    buy: 4000,
    sell: 2400,
  },
  {
    name: "Feb",
    buy: 3000,
    sell: 1398,
  },
  {
    name: "Mar",
    buy: 2000,
    sell: 9800,
  },
  {
    name: "Apr",
    buy: 2780,
    sell: 3908,
  },
  {
    name: "May",
    buy: 1890,
    sell: 4800,
  },
  {
    name: "Jun",
    buy: 2390,
    sell: 3800,
  },
  {
    name: "Jul",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Aug",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Sep",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Oct",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Nov",
    buy: 3490,
    sell: 4300,
  },
  {
    name: "Dec",
    buy: 3490,
    sell: 4300,
  }
];

export default function App() {
  return (
    <>
    <h1>React - Bar chart using Rechart - technostuf.com</h1>
    <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="buy" fill="#8884d8" />
      <Bar dataKey="sell" fill="#82ca9d" />
    </BarChart>
    </>
  );
}
