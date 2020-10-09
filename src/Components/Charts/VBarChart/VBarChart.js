import React from 'react'
import {
    BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, Cell
} from 'recharts'

const data = [
    {
      "name": "10+ DAYS",
      "value": 200
    },
    {
      "name": "5-10 DAYS",
      "value": 100,      
    },
    {
      "name": "3-5 DAYS",
      "value": 50,      
    },
    {
      "name": "BELOW 2 DAYS",
      "value": 122,
    },
    {
      "name": "CLOSED",
      "value": 174,    
    },    
]
const colors = ['#F3AB9B', '#FFCB7E', '#FFE350', '#72C3FF', '#01D09F']
const NotAxisTickButLabel = props => {
    return(
        <g transform={ "translate(" + props.x + "," + props.y + ")" }>
        <text x={0} y={0} dy={0} fontFamily="Inter" fontSize="12px" fontWeight={500} textAnchor="middle" fill={"#888888"} >{props.payload.value}</text>
        </g>
    )
}
const VBarChart = () => {    
    return(
        <BarChart width={650} height={400} data={data} margin={{top: 20, right: 30, left: 20, bottom: 20}}
        >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="name" tick={<NotAxisTickButLabel />} tickMargin={12} axisLine={{stroke: "#DADADA", strokeDasharray: 2}} />
            <YAxis tickLine={false} tick={<NotAxisTickButLabel/>} tickMargin={12} axisLine={{stroke: "#DADADA", strokeDasharray: 2}}/>
            <Tooltip />            
            <Bar dataKey="value" barSize={30}>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} stroke={colors[index]}  strokeWidth={index === 2 ? 4 : 1} fill={colors[index]}                        
                        />
                    ))
                }
            </Bar>            
        </BarChart>
    )
}

export default VBarChart