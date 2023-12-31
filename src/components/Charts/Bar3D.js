import React, { Component } from "react";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const Bar3D = ({ data }) => {
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        yAxisName: "Forks",
        xAxisName: "Repos",
        xAxisNameSize: "16px",
        yAxisNameSize: "16px",
      },

      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
