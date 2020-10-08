import React from 'react'
import { max, scaleLinear, scaleBand } from 'd3'
import { AxisBottom } from './AxisBottom';
import { useData } from './useData';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import './BarChart.css'

const width = 870
const height = 350
const margin = { top: 20, right: 50, bottom: 20, left: 150}

const BarChart = () => {    
    const data = useData();
    if (!data) {
        return <pre>Loading...</pre>;
    }
    
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    
    const xValue = d => d.population
    const yValue = d => d.country

    //const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

    const xScale = scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth])
    
    const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.85)        

    return (
        <svg width={width} height={height} style={{margin: "15px 0px"}}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom
                    xScale={xScale}
                    innerHeight={innerHeight}
                />
                <AxisLeft yScale={yScale} />
                <Marks
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}                
                />
            </g>
        </svg>
    )
}

export default BarChart;