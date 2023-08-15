import React, { Component } from "react";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const Column3D = ({ data }) => {
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameSize: "16px",
        yAxisNameSize: "16px",
      },

      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
