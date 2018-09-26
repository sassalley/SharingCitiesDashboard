import React, { Component } from 'react';
import VegaLite from 'react-vega-lite';

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v2.json",
  description: "Weather Forecast",
  mark: "line",
  encoding: {
    x: {
      field: "current_at",
      type: "temporal",
      title: "Date"
    },
    y: {
      field: "temp",
      type: "quantitative",
      title: "Temperature"
    }
  }
};

const data = {
  values: [{"current_at":"2018-08-03 16:00:00","temp":30.25},{"current_at":"2018-08-03 19:00:00","temp":28.36},{"current_at":"2018-08-03 22:00:00","temp":23.09},{"current_at":"2018-08-04 01:00:00","temp":20.74},{"current_at":"2018-08-04 04:00:00","temp":19.48},{"current_at":"2018-08-04 07:00:00","temp":19.14},{"current_at":"2018-08-04 10:00:00","temp":23.55},{"current_at":"2018-08-04 13:00:00","temp":26.6},{"current_at":"2018-08-04 16:00:00","temp":27.96},{"current_at":"2018-08-04 19:00:00","temp":27.46},{"current_at":"2018-08-04 22:00:00","temp":21.84},{"current_at":"2018-08-05 01:00:00","temp":17.82},{"current_at":"2018-08-05 04:00:00","temp":14.99},{"current_at":"2018-08-05 07:00:00","temp":16.93},{"current_at":"2018-08-05 10:00:00","temp":23.99},{"current_at":"2018-08-05 13:00:00","temp":27.64},{"current_at":"2018-08-05 16:00:00","temp":28.53},{"current_at":"2018-08-05 19:00:00","temp":28},{"current_at":"2018-08-05 22:00:00","temp":25.86},{"current_at":"2018-08-06 01:00:00","temp":20.99},{"current_at":"2018-08-06 04:00:00","temp":16.23},{"current_at":"2018-08-06 07:00:00","temp":17.49},{"current_at":"2018-08-06 10:00:00","temp":25.57},{"current_at":"2018-08-06 13:00:00","temp":28.88},{"current_at":"2018-08-06 16:00:00","temp":31.13},{"current_at":"2018-08-06 19:00:00","temp":29.05},{"current_at":"2018-08-06 22:00:00","temp":20.72},{"current_at":"2018-08-07 01:00:00","temp":18.41},{"current_at":"2018-08-07 04:00:00","temp":16.3},{"current_at":"2018-08-07 07:00:00","temp":18.44},{"current_at":"2018-08-07 10:00:00","temp":29.34},{"current_at":"2018-08-07 13:00:00","temp":29.96},{"current_at":"2018-08-07 16:00:00","temp":31.27},{"current_at":"2018-08-07 19:00:00","temp":27.1},{"current_at":"2018-08-07 22:00:00","temp":18.93},{"current_at":"2018-08-08 01:00:00","temp":17.56},{"current_at":"2018-08-08 04:00:00","temp":16.19},{"current_at":"2018-08-08 07:00:00","temp":15.3},{"current_at":"2018-08-08 10:00:00","temp":19.32},{"current_at":"2018-08-08 13:00:00","temp":22.95},{"current_at":"2018-08-08 16:00:00","temp":23.03},{"current_at":"2018-08-08 19:00:00","temp":21.77},{"current_at":"2018-08-08 22:00:00","temp":19.05},{"current_at":"2018-08-09 01:00:00","temp":17.22},{"current_at":"2018-08-09 04:00:00","temp":15.68},{"current_at":"2018-08-09 07:00:00","temp":14.69},{"current_at":"2018-08-09 10:00:00","temp":14.58},{"current_at":"2018-08-09 13:00:00","temp":13.81},{"current_at":"2018-08-09 16:00:00","temp":14.45},{"current_at":"2018-08-09 19:00:00","temp":15.41},{"current_at":"2018-08-09 22:00:00","temp":13.09},{"current_at":"2018-08-10 01:00:00","temp":10.82},{"current_at":"2018-08-10 04:00:00","temp":10.39},{"current_at":"2018-08-10 07:00:00","temp":11.02},{"current_at":"2018-08-10 10:00:00","temp":13.12},{"current_at":"2018-08-10 13:00:00","temp":15.56},{"current_at":"2018-08-10 16:00:00","temp":16.54},{"current_at":"2018-08-10 19:00:00","temp":16.92},{"current_at":"2018-08-10 22:00:00","temp":15.08},{"current_at":"2018-08-11 01:00:00","temp":14.33},{"current_at":"2018-08-11 04:00:00","temp":14.49},{"current_at":"2018-08-11 07:00:00","temp":15.38},{"current_at":"2018-08-11 10:00:00","temp":16.93},{"current_at":"2018-08-11 13:00:00","temp":16.56},{"current_at":"2018-08-11 16:00:00","temp":18.3},{"current_at":"2018-08-11 19:00:00","temp":18.48},{"current_at":"2018-08-11 22:00:00","temp":18.01},{"current_at":"2018-08-12 01:00:00","temp":17.93},{"current_at":"2018-08-12 04:00:00","temp":17.15},{"current_at":"2018-08-12 07:00:00","temp":17.28},{"current_at":"2018-08-12 10:00:00","temp":21.07},{"current_at":"2018-08-12 13:00:00","temp":23.93},{"current_at":"2018-08-12 16:00:00","temp":25.41},{"current_at":"2018-08-12 19:00:00","temp":24.04},{"current_at":"2018-08-12 22:00:00","temp":20.02},{"current_at":"2018-08-13 01:00:00","temp":16.31},{"current_at":"2018-08-13 04:00:00","temp":14.11},{"current_at":"2018-08-13 07:00:00","temp":15.85},{"current_at":"2018-08-13 10:00:00","temp":22.21},{"current_at":"2018-08-13 12:00:00","temp":20.4},{"current_at":"2018-08-13 13:00:00","temp":25.98},{"current_at":"2018-08-13 15:00:00","temp":23.16},{"current_at":"2018-08-13 16:00:00","temp":24.7},{"current_at":"2018-08-13 18:00:00","temp":21.28},{"current_at":"2018-08-13 21:00:00","temp":19.12},{"current_at":"2018-08-14 00:00:00","temp":16.46},{"current_at":"2018-08-14 03:00:00","temp":14.47},{"current_at":"2018-08-14 06:00:00","temp":13.86},{"current_at":"2018-08-14 09:00:00","temp":19.97},{"current_at":"2018-08-14 12:00:00","temp":22.9},{"current_at":"2018-08-14 15:00:00","temp":26.19},{"current_at":"2018-08-14 18:00:00","temp":23.79},{"current_at":"2018-08-14 21:00:00","temp":17.49},{"current_at":"2018-08-15 00:00:00","temp":15.35},{"current_at":"2018-08-15 03:00:00","temp":13.59},{"current_at":"2018-08-15 06:00:00","temp":16.19},{"current_at":"2018-08-15 09:00:00","temp":23.58},{"current_at":"2018-08-15 12:00:00","temp":24.74},{"current_at":"2018-08-15 15:00:00","temp":24.7},{"current_at":"2018-08-15 18:00:00","temp":21.62},{"current_at":"2018-08-15 21:00:00","temp":16.31},{"current_at":"2018-08-16 00:00:00","temp":15.79},{"current_at":"2018-08-16 03:00:00","temp":16.59},{"current_at":"2018-08-16 06:00:00","temp":18.62},{"current_at":"2018-08-16 09:00:00","temp":16.61},{"current_at":"2018-08-16 12:00:00","temp":15.47},{"current_at":"2018-08-16 15:00:00","temp":17.58},{"current_at":"2018-08-16 18:00:00","temp":19.15},{"current_at":"2018-08-16 21:00:00","temp":15.6},{"current_at":"2018-08-17 00:00:00","temp":11.14},{"current_at":"2018-08-17 03:00:00","temp":10.11},{"current_at":"2018-08-17 06:00:00","temp":11.23},{"current_at":"2018-08-17 09:00:00","temp":18.1},{"current_at":"2018-08-17 12:00:00","temp":19.92},{"current_at":"2018-08-17 15:00:00","temp":20.41},{"current_at":"2018-08-17 18:00:00","temp":19.74},{"current_at":"2018-08-17 21:00:00","temp":17.49},{"current_at":"2018-08-18 00:00:00","temp":15.13},{"current_at":"2018-08-18 03:00:00","temp":14.06},{"current_at":"2018-08-18 06:00:00","temp":14.22},{"current_at":"2018-08-18 09:00:00","temp":19.56},{"current_at":"2018-08-18 12:00:00","temp":22.41},{"current_at":"2018-08-18 15:00:00","temp":23.63},{"current_at":"2018-08-18 18:00:00","temp":23.17},{"current_at":"2018-08-18 21:00:00","temp":17.5},{"current_at":"2018-08-19 00:00:00","temp":16.3},{"current_at":"2018-08-19 03:00:00","temp":16.56},{"current_at":"2018-08-19 06:00:00","temp":16.12},{"current_at":"2018-08-19 09:00:00","temp":20.22},{"current_at":"2018-08-19 12:00:00","temp":23.88},{"current_at":"2018-08-19 15:00:00","temp":25.06},{"current_at":"2018-08-19 18:00:00","temp":25},{"current_at":"2018-08-19 21:00:00","temp":22.12},{"current_at":"2018-08-20 00:00:00","temp":20.43},{"current_at":"2018-08-20 03:00:00","temp":19.55},{"current_at":"2018-08-20 06:00:00","temp":18.28},{"current_at":"2018-08-20 09:00:00","temp":19.7},{"current_at":"2018-08-20 12:00:00","temp":23.1},{"current_at":"2018-08-20 15:00:00","temp":23.85},{"current_at":"2018-08-20 18:00:00","temp":24.04},{"current_at":"2018-08-20 21:00:00","temp":22.08},{"current_at":"2018-08-21 00:00:00","temp":19.54},{"current_at":"2018-08-21 03:00:00","temp":16.44},{"current_at":"2018-08-21 06:00:00","temp":16.17},{"current_at":"2018-08-21 09:00:00","temp":21.3},{"current_at":"2018-08-21 12:00:00","temp":22.61},{"current_at":"2018-08-21 15:00:00","temp":24.25},{"current_at":"2018-08-21 18:00:00","temp":24.11},{"current_at":"2018-08-21 21:00:00","temp":20.36},{"current_at":"2018-08-22 00:00:00","temp":15.67},{"current_at":"2018-08-22 03:00:00","temp":14.67},{"current_at":"2018-08-22 06:00:00","temp":14.96},{"current_at":"2018-08-22 09:00:00","temp":21.3},{"current_at":"2018-08-22 12:00:00","temp":24.39},{"current_at":"2018-08-22 15:00:00","temp":26.07},{"current_at":"2018-08-22 18:00:00","temp":25.37},{"current_at":"2018-08-22 21:00:00","temp":23.07},{"current_at":"2018-08-23 00:00:00","temp":16.67},{"current_at":"2018-08-23 03:00:00","temp":15.48},{"current_at":"2018-08-23 06:00:00","temp":16.37},{"current_at":"2018-08-23 09:00:00","temp":18.5},{"current_at":"2018-08-23 12:00:00","temp":19.74},{"current_at":"2018-08-23 15:00:00","temp":21.86},{"current_at":"2018-08-23 18:00:00","temp":20.15},{"current_at":"2018-08-23 21:00:00","temp":17},{"current_at":"2018-08-24 00:00:00","temp":15.18},{"current_at":"2018-08-24 03:00:00","temp":13.34},{"current_at":"2018-08-24 06:00:00","temp":11.81},{"current_at":"2018-08-24 09:00:00","temp":15.05},{"current_at":"2018-08-24 12:00:00","temp":17.87},{"current_at":"2018-08-24 13:00:00","temp":18.36},{"current_at":"2018-08-24 15:00:00","temp":16.72},{"current_at":"2018-08-24 16:00:00","temp":16.85},{"current_at":"2018-08-24 18:00:00","temp":13.91},{"current_at":"2018-08-24 19:00:00","temp":15.08},{"current_at":"2018-08-24 21:00:00","temp":10.06},{"current_at":"2018-08-24 22:00:00","temp":11.54},{"current_at":"2018-08-25 00:00:00","temp":8.84},{"current_at":"2018-08-25 01:00:00","temp":10.17},{"current_at":"2018-08-25 03:00:00","temp":7.91},{"current_at":"2018-08-25 04:00:00","temp":9.04},{"current_at":"2018-08-25 06:00:00","temp":8.1},{"current_at":"2018-08-25 07:00:00","temp":9.25},{"current_at":"2018-08-25 09:00:00","temp":14.52},{"current_at":"2018-08-25 10:00:00","temp":13.43},{"current_at":"2018-08-25 12:00:00","temp":17.97},{"current_at":"2018-08-25 13:00:00","temp":15.14},{"current_at":"2018-08-25 15:00:00","temp":16.94},{"current_at":"2018-08-25 16:00:00","temp":16.52},{"current_at":"2018-08-25 18:00:00","temp":16.25},{"current_at":"2018-08-25 19:00:00","temp":14.62},{"current_at":"2018-08-25 21:00:00","temp":11.54},{"current_at":"2018-08-25 22:00:00","temp":11.68},{"current_at":"2018-08-26 00:00:00","temp":8.72},{"current_at":"2018-08-26 01:00:00","temp":8.74},{"current_at":"2018-08-26 03:00:00","temp":9.19},{"current_at":"2018-08-26 04:00:00","temp":6.85},{"current_at":"2018-08-26 06:00:00","temp":10.62},{"current_at":"2018-08-26 07:00:00","temp":7},{"current_at":"2018-08-26 09:00:00","temp":15.42},{"current_at":"2018-08-26 10:00:00","temp":14.81},{"current_at":"2018-08-26 12:00:00","temp":12.46},{"current_at":"2018-08-26 13:00:00","temp":14.37},{"current_at":"2018-08-26 15:00:00","temp":12.7},{"current_at":"2018-08-26 16:00:00","temp":12.98},{"current_at":"2018-08-26 18:00:00","temp":19.7},{"current_at":"2018-08-26 19:00:00","temp":14.69},{"current_at":"2018-08-26 21:00:00","temp":17.87},{"current_at":"2018-08-26 22:00:00","temp":16.6},{"current_at":"2018-08-27 00:00:00","temp":15.53},{"current_at":"2018-08-27 01:00:00","temp":15.58},{"current_at":"2018-08-27 03:00:00","temp":14.83},{"current_at":"2018-08-27 04:00:00","temp":14.54},{"current_at":"2018-08-27 06:00:00","temp":11.54},{"current_at":"2018-08-27 07:00:00","temp":11.78},{"current_at":"2018-08-27 09:00:00","temp":15.93},{"current_at":"2018-08-27 10:00:00","temp":14.69},{"current_at":"2018-08-27 12:00:00","temp":19.06},{"current_at":"2018-08-27 13:00:00","temp":17.81},{"current_at":"2018-08-27 15:00:00","temp":19.37},{"current_at":"2018-08-27 16:00:00","temp":19.19},{"current_at":"2018-08-27 18:00:00","temp":17.57},{"current_at":"2018-08-27 19:00:00","temp":18.43},{"current_at":"2018-08-27 21:00:00","temp":14.91},{"current_at":"2018-08-27 22:00:00","temp":12.8},{"current_at":"2018-08-28 00:00:00","temp":12.76},{"current_at":"2018-08-28 01:00:00","temp":10.05},{"current_at":"2018-08-28 03:00:00","temp":11.97},{"current_at":"2018-08-28 04:00:00","temp":8.79},{"current_at":"2018-08-28 06:00:00","temp":13.33},{"current_at":"2018-08-28 07:00:00","temp":9.11},{"current_at":"2018-08-28 09:00:00","temp":22.3},{"current_at":"2018-08-28 10:00:00","temp":18.24},{"current_at":"2018-08-28 12:00:00","temp":19.82},{"current_at":"2018-08-28 13:00:00","temp":20.45},{"current_at":"2018-08-28 15:00:00","temp":20.18},{"current_at":"2018-08-28 16:00:00","temp":21.17},{"current_at":"2018-08-28 18:00:00","temp":17.61},{"current_at":"2018-08-28 19:00:00","temp":19.11},{"current_at":"2018-08-28 21:00:00","temp":13.63},{"current_at":"2018-08-28 22:00:00","temp":16.41},{"current_at":"2018-08-29 00:00:00","temp":12.57},{"current_at":"2018-08-29 01:00:00","temp":15.41},{"current_at":"2018-08-29 03:00:00","temp":12.22},{"current_at":"2018-08-29 04:00:00","temp":15.04},{"current_at":"2018-08-29 06:00:00","temp":12.57},{"current_at":"2018-08-29 07:00:00","temp":15.21},{"current_at":"2018-08-29 09:00:00","temp":15.05},{"current_at":"2018-08-29 10:00:00","temp":16.8},{"current_at":"2018-08-29 12:00:00","temp":17.07},{"current_at":"2018-08-29 15:00:00","temp":18.94},{"current_at":"2018-08-29 18:00:00","temp":17.52},{"current_at":"2018-08-29 21:00:00","temp":13.86},{"current_at":"2018-08-30 00:00:00","temp":12.41},{"current_at":"2018-08-30 03:00:00","temp":11.29},{"current_at":"2018-08-30 06:00:00","temp":9.9},{"current_at":"2018-08-30 09:00:00","temp":16.33},{"current_at":"2018-08-30 12:00:00","temp":16.52},{"current_at":"2018-08-30 15:00:00","temp":19.07},{"current_at":"2018-08-30 18:00:00","temp":17.42},{"current_at":"2018-08-30 21:00:00","temp":13.25},{"current_at":"2018-08-31 00:00:00","temp":11.88},{"current_at":"2018-08-31 03:00:00","temp":9.41},{"current_at":"2018-08-31 06:00:00","temp":9.84},{"current_at":"2018-08-31 09:00:00","temp":21.08},{"current_at":"2018-08-31 12:00:00","temp":19.71},{"current_at":"2018-08-31 15:00:00","temp":19.69},{"current_at":"2018-08-31 18:00:00","temp":18.5},{"current_at":"2018-08-31 21:00:00","temp":12.81},{"current_at":"2018-09-01 00:00:00","temp":10.37},{"current_at":"2018-09-01 03:00:00","temp":9.23},{"current_at":"2018-09-01 06:00:00","temp":9.53},{"current_at":"2018-09-01 09:00:00","temp":24.29},{"current_at":"2018-09-01 12:00:00","temp":22.62},{"current_at":"2018-09-01 15:00:00","temp":23.35},{"current_at":"2018-09-01 18:00:00","temp":20.49},{"current_at":"2018-09-01 21:00:00","temp":12.18},{"current_at":"2018-09-02 00:00:00","temp":11.81},{"current_at":"2018-09-02 03:00:00","temp":10.79},{"current_at":"2018-09-02 06:00:00","temp":9.78},{"current_at":"2018-09-02 09:00:00","temp":25.16},{"current_at":"2018-09-02 12:00:00","temp":22.4},{"current_at":"2018-09-02 15:00:00","temp":23.28},{"current_at":"2018-09-02 18:00:00","temp":20.14},{"current_at":"2018-09-02 21:00:00","temp":11.29},{"current_at":"2018-09-03 00:00:00","temp":10.41},{"current_at":"2018-09-03 03:00:00","temp":9.07},{"current_at":"2018-09-03 06:00:00","temp":9.3},{"current_at":"2018-09-03 09:00:00","temp":25.65},{"current_at":"2018-09-03 12:00:00","temp":22.66},{"current_at":"2018-09-03 15:00:00","temp":23.03},{"current_at":"2018-09-03 18:00:00","temp":21.39},{"current_at":"2018-09-03 21:00:00","temp":13.46},{"current_at":"2018-09-04 00:00:00","temp":10.55},{"current_at":"2018-09-04 03:00:00","temp":10.75},{"current_at":"2018-09-04 06:00:00","temp":13.55},{"current_at":"2018-09-04 09:00:00","temp":18.53},{"current_at":"2018-09-04 12:00:00","temp":21.81},{"current_at":"2018-09-04 15:00:00","temp":19.72},{"current_at":"2018-09-04 18:00:00","temp":18.45},{"current_at":"2018-09-04 21:00:00","temp":15.49},{"current_at":"2018-09-05 00:00:00","temp":13.85},{"current_at":"2018-09-05 03:00:00","temp":13.85},{"current_at":"2018-09-05 06:00:00","temp":13.45},{"current_at":"2018-09-05 09:00:00","temp":15.86},{"current_at":"2018-09-05 12:00:00","temp":19.06},{"current_at":"2018-09-05 15:00:00","temp":19.44},{"current_at":"2018-09-05 18:00:00","temp":18.35},{"current_at":"2018-09-05 21:00:00","temp":16},{"current_at":"2018-09-06 00:00:00","temp":13.01},{"current_at":"2018-09-06 03:00:00","temp":12.08},{"current_at":"2018-09-06 06:00:00","temp":10.17},{"current_at":"2018-09-06 09:00:00","temp":13},{"current_at":"2018-09-06 12:00:00","temp":21.15},{"current_at":"2018-09-06 15:00:00","temp":20.72},{"current_at":"2018-09-06 18:00:00","temp":13.92},{"current_at":"2018-09-06 21:00:00","temp":14.03},{"current_at":"2018-09-07 00:00:00","temp":10.36},{"current_at":"2018-09-07 03:00:00","temp":8.25},{"current_at":"2018-09-07 06:00:00","temp":7.38},{"current_at":"2018-09-07 09:00:00","temp":14.28},{"current_at":"2018-09-07 12:00:00","temp":18.51},{"current_at":"2018-09-07 15:00:00","temp":18.86},{"current_at":"2018-09-07 18:00:00","temp":15.66},{"current_at":"2018-09-07 21:00:00","temp":9.63},{"current_at":"2018-09-08 00:00:00","temp":6.53},{"current_at":"2018-09-08 03:00:00","temp":6.88},{"current_at":"2018-09-08 06:00:00","temp":10.89},{"current_at":"2018-09-08 09:00:00","temp":16.74},{"current_at":"2018-09-08 12:00:00","temp":20.43},{"current_at":"2018-09-08 15:00:00","temp":19.29},{"current_at":"2018-09-08 18:00:00","temp":16.79},{"current_at":"2018-09-08 21:00:00","temp":13.71},{"current_at":"2018-09-09 00:00:00","temp":12.57},{"current_at":"2018-09-09 03:00:00","temp":14.3},{"current_at":"2018-09-09 06:00:00","temp":13.94},{"current_at":"2018-09-09 09:00:00","temp":19.48},{"current_at":"2018-09-09 12:00:00","temp":23.09},{"current_at":"2018-09-09 15:00:00","temp":22.26},{"current_at":"2018-09-09 18:00:00","temp":19.82},{"current_at":"2018-09-09 21:00:00","temp":16.1},{"current_at":"2018-09-10 00:00:00","temp":14.07},{"current_at":"2018-09-10 03:00:00","temp":13.13},{"current_at":"2018-09-10 06:00:00","temp":12.41},{"current_at":"2018-09-10 09:00:00","temp":18.85},{"current_at":"2018-09-10 12:00:00","temp":18.88},{"current_at":"2018-09-10 15:00:00","temp":21.35},{"current_at":"2018-09-10 18:00:00","temp":20.49},{"current_at":"2018-09-10 21:00:00","temp":15.13},{"current_at":"2018-09-11 00:00:00","temp":15.74},{"current_at":"2018-09-11 03:00:00","temp":16.81},{"current_at":"2018-09-11 06:00:00","temp":17.41},{"current_at":"2018-09-11 09:00:00","temp":21.19},{"current_at":"2018-09-11 12:00:00","temp":22.38},{"current_at":"2018-09-11 15:00:00","temp":22.5},{"current_at":"2018-09-11 18:00:00","temp":18.95},{"current_at":"2018-09-11 21:00:00","temp":16.18},{"current_at":"2018-09-12 00:00:00","temp":16.42},{"current_at":"2018-09-12 03:00:00","temp":12.08},{"current_at":"2018-09-12 06:00:00","temp":10.37},{"current_at":"2018-09-12 09:00:00","temp":12.95},{"current_at":"2018-09-12 12:00:00","temp":14.86},{"current_at":"2018-09-12 15:00:00","temp":15.5},{"current_at":"2018-09-12 18:00:00","temp":13.89},{"current_at":"2018-09-12 21:00:00","temp":9.98},{"current_at":"2018-09-13 00:00:00","temp":9.14},{"current_at":"2018-09-13 03:00:00","temp":9.16},{"current_at":"2018-09-13 06:00:00","temp":6.46},{"current_at":"2018-09-13 09:00:00","temp":19.33},{"current_at":"2018-09-13 12:00:00","temp":18.73},{"current_at":"2018-09-13 15:00:00","temp":19.61},{"current_at":"2018-09-13 18:00:00","temp":16.43},{"current_at":"2018-09-13 21:00:00","temp":9.22},{"current_at":"2018-09-14 00:00:00","temp":10.13},{"current_at":"2018-09-14 03:00:00","temp":8.2},{"current_at":"2018-09-14 06:00:00","temp":9.79},{"current_at":"2018-09-14 09:00:00","temp":19.91},{"current_at":"2018-09-14 12:00:00","temp":18.82},{"current_at":"2018-09-14 15:00:00","temp":16.47},{"current_at":"2018-09-14 18:00:00","temp":16.62},{"current_at":"2018-09-14 21:00:00","temp":12.69},{"current_at":"2018-09-15 00:00:00","temp":11.36},{"current_at":"2018-09-15 03:00:00","temp":9.91},{"current_at":"2018-09-15 06:00:00","temp":9.7},{"current_at":"2018-09-15 09:00:00","temp":16.01},{"current_at":"2018-09-15 12:00:00","temp":20.42},{"current_at":"2018-09-15 15:00:00","temp":19.87},{"current_at":"2018-09-15 18:00:00","temp":17.94},{"current_at":"2018-09-15 21:00:00","temp":14.26},{"current_at":"2018-09-16 00:00:00","temp":12.64},{"current_at":"2018-09-16 03:00:00","temp":13.48},{"current_at":"2018-09-16 06:00:00","temp":14.17},{"current_at":"2018-09-16 09:00:00","temp":18.5},{"current_at":"2018-09-16 12:00:00","temp":20.75},{"current_at":"2018-09-16 15:00:00","temp":22.47},{"current_at":"2018-09-16 18:00:00","temp":20.2},{"current_at":"2018-09-16 21:00:00","temp":15.83},{"current_at":"2018-09-17 00:00:00","temp":15.67},{"current_at":"2018-09-17 03:00:00","temp":16.31},{"current_at":"2018-09-17 06:00:00","temp":17.5},{"current_at":"2018-09-17 09:00:00","temp":20.01},{"current_at":"2018-09-17 12:00:00","temp":24.77},{"current_at":"2018-09-17 15:00:00","temp":24.24},{"current_at":"2018-09-17 18:00:00","temp":19.63},{"current_at":"2018-09-17 21:00:00","temp":17.07},{"current_at":"2018-09-18 00:00:00","temp":18.91},{"current_at":"2018-09-18 03:00:00","temp":17},{"current_at":"2018-09-18 06:00:00","temp":17.85},{"current_at":"2018-09-18 09:00:00","temp":19.68},{"current_at":"2018-09-18 12:00:00","temp":22.64},{"current_at":"2018-09-18 15:00:00","temp":22.1},{"current_at":"2018-09-18 18:00:00","temp":17.49},{"current_at":"2018-09-18 21:00:00","temp":16.31},{"current_at":"2018-09-19 00:00:00","temp":17.19},{"current_at":"2018-09-19 03:00:00","temp":17.78},{"current_at":"2018-09-19 06:00:00","temp":17.06},{"current_at":"2018-09-19 09:00:00","temp":19.25},{"current_at":"2018-09-19 12:00:00","temp":21.13},{"current_at":"2018-09-19 15:00:00","temp":22.5},{"current_at":"2018-09-19 18:00:00","temp":18.13},{"current_at":"2018-09-19 21:00:00","temp":17.25},{"current_at":"2018-09-20 00:00:00","temp":16.18},{"current_at":"2018-09-20 03:00:00","temp":16.34},{"current_at":"2018-09-20 06:00:00","temp":17.09},{"current_at":"2018-09-20 09:00:00","temp":18.78},{"current_at":"2018-09-20 12:00:00","temp":19.97},{"current_at":"2018-09-20 15:00:00","temp":19.33},{"current_at":"2018-09-20 18:00:00","temp":19.06},{"current_at":"2018-09-20 21:00:00","temp":18.75},{"current_at":"2018-09-21 00:00:00","temp":17.52},{"current_at":"2018-09-21 03:00:00","temp":15.34},{"current_at":"2018-09-21 06:00:00","temp":10.21},{"current_at":"2018-09-21 09:00:00","temp":12.21},{"current_at":"2018-09-21 12:00:00","temp":14.58},{"current_at":"2018-09-21 15:00:00","temp":14.28},{"current_at":"2018-09-21 18:00:00","temp":13.61},{"current_at":"2018-09-21 21:00:00","temp":12.16},{"current_at":"2018-09-22 00:00:00","temp":10.74},{"current_at":"2018-09-22 03:00:00","temp":10.24},{"current_at":"2018-09-22 06:00:00","temp":10.09},{"current_at":"2018-09-22 09:00:00","temp":13.56},{"current_at":"2018-09-22 12:00:00","temp":15.4},{"current_at":"2018-09-22 15:00:00","temp":13.61},{"current_at":"2018-09-22 18:00:00","temp":11.66},{"current_at":"2018-09-22 21:00:00","temp":10.52},{"current_at":"2018-09-23 00:00:00","temp":10.76},{"current_at":"2018-09-23 03:00:00","temp":11.92},{"current_at":"2018-09-23 06:00:00","temp":12.52},{"current_at":"2018-09-23 09:00:00","temp":13.37},{"current_at":"2018-09-23 12:00:00","temp":14.16},{"current_at":"2018-09-23 15:00:00","temp":12.31},{"current_at":"2018-09-23 18:00:00","temp":7.72},{"current_at":"2018-09-23 21:00:00","temp":8.15},{"current_at":"2018-09-24 00:00:00","temp":7.45},{"current_at":"2018-09-24 03:00:00","temp":6.25},{"current_at":"2018-09-24 06:00:00","temp":4.79},{"current_at":"2018-09-24 09:00:00","temp":8.33},{"current_at":"2018-09-24 12:00:00","temp":11.22},{"current_at":"2018-09-24 15:00:00","temp":12.15},{"current_at":"2018-09-24 18:00:00","temp":9.05},{"current_at":"2018-09-24 21:00:00","temp":6.94},{"current_at":"2018-09-25 00:00:00","temp":5.33},{"current_at":"2018-09-25 03:00:00","temp":4.29},{"current_at":"2018-09-25 06:00:00","temp":2.24},{"current_at":"2018-09-25 09:00:00","temp":9.99},{"current_at":"2018-09-25 12:00:00","temp":13.68}]
};

class LineChart extends Component {
  render() {
    return <VegaLite spec={spec} data={data} />
  }
}

export default LineChart;