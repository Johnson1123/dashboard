import './Chart.scss'

import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Jan',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Feb',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Mar',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'April',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'May',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JUNE',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
        <ResponsiveContainer width={`100%`} height={320}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    );
  }
}
