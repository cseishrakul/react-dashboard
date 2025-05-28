import React from "react";
import Header from "../../components/Header";
import LineCharts from '../../components/charts/LineCharts';

const Line = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full"> <LineCharts /> </div>
    </div>
  );
};

export default Line;
