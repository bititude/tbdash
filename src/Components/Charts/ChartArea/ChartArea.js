import React from 'react'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const data = [
    {
      name: 'SUN', "Below 10%": 25, "10%-20%": 33, "20%-30%": 29,
    },
    {
      name: 'MON', "Below 10%": 37, "10%-20%": 42, "20%-30%": 10,
    },
    {
      name: 'TUE', "Below 10%": 32, "10%-20%": 26, "20%-30%": 19,
    },
    {
      name: 'WED', "Below 10%": 45, "10%-20%": 50, "20%-30%": 17,
    },
    {
      name: 'THU', "Below 10%": 39, "10%-20%": 27, "20%-30%": 22,
    },
    {
      name: 'FRI', "Below 10%": 39, "10%-20%": 47, "20%-30%": 33,
    },
    {
      name: 'SAT', "Below 10%": 24, "10%-20%": 28, "20%-30%": 43,
    },
];

const NotAxisTickButLabel = props => {
  console.log(props)
  return(
    <g transform={ "translate(" + props.x + "," + props.y + ")" }>
      <text x={0} y={0} dy={0} fontFamily="Inter" fontSize="12px" fontWeight={500} textAnchor="middle" fill={"#888888"} >{props.payload.value}</text>
    </g>
  )
}

const ChartArea = () => {
    return (
        <AreaChart
          width={437}
          height={400}
          data={data}
          margin={{
            top: 15, right: 50, left: 0, bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="color10" x1="0" y1="0" x2="0" y2="1">
              <stop offset="-20%" stopColor="#72C3FF" stopOpacity={0.7}/>
              <stop offset="126.57%" stopColor="rgba(114, 195, 255, 0.25)" stopOpacity={0.7}/>
            </linearGradient>
            <linearGradient id="color10-20" x1="0" y1="0" x2="0" y2="1">
              <stop offset="-20.61%" stopColor="#FFE350" stopOpacity={0.7}/>
              <stop offset="131.03%" stopColor="#FFFFFF" stopOpacity={0.7}/>
            </linearGradient>
            <linearGradient id="color20-30" x1="0" y1="0" x2="0" y2="1">
              <stop offset="-10.89%" stopColor="#F3AB9B" stopOpacity={0.7}/>
              <stop offset="107.49%" stopColor="rgba(243, 171, 155, 0.25)" stopOpacity={0.7}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name" tick={<NotAxisTickButLabel/>} tickLine={false} tickMargin={12} axisLine={false} />
          <YAxis tickLine={false} tick={<NotAxisTickButLabel/>} tickMargin={12} axisLine={{stroke: "#DADADA", strokeDasharray: 2}}/>
          <Tooltip />
          <Area type="monotone" dataKey="Below 10%" stackId="3" stroke="url(#color10)" fillOpacity={1} fill="url(#color10)" />
          <Area type="monotone" dataKey="10%-20%" stackId="2" stroke="url(#color10-20)" fillOpacity={1} fill="url(#color10-20)" />
          <Area type="monotone" dataKey="20%-30%" stackId="1" stroke="url(#color20-30)" fillOpacity={1} fill="url(#color20-30)" />
          <Legend verticalAlign="top" align="right" height={36} iconType="square" layout="horizontal" iconSize={12}
            wrapperStyle={{ fontFamily: 'Inter, sans-serif', fontSize:"12px", color:"#585858" }}/>
        </AreaChart>
    )
}

export default ChartArea